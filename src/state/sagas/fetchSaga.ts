import { take, fork, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import api from '../../utils/api';
import fetchActions from '../actions/fetchActions';
import actionTypes from '../actions/actionTypes';
import { RootState } from '../reducers/';
import { push } from 'react-router-redux';
const selectSearchKey = (state: RootState) => state.SearchState.currentSearchKey;
const selectTotalNum = (state: RootState) => {
    if (state.SearchState.currentSearchKey && state.SearchState.Movies[state.SearchState.currentSearchKey].Movies) {
        return state.SearchState.Movies[state.SearchState.currentSearchKey].currentPage 
        === state.SearchState.Movies[state.SearchState.currentSearchKey].totalPage;
    }
    return false;
};
function* requestMovieById(Id: string) {
    const data = yield api.fetchMovieById(Id);
    let MovieDetail: MovieById;
    try {
        if (data.Error) {
            console.log(data.Error);
        } else {
            MovieDetail = {
                ...data,
                Actors: data.Actors.split(', '),
                Country: data.Country.split(', '),
                Genre: data.Genre.split(', '),
                Language: data.Language.split(', '),
                Year: parseInt(data.Year, 10),
                imdbRating: parseFloat(data.imdbRating),
                imdbVotes: parseInt(data.imdbVotes, 10),
                Writer: data.Writer.split(', ')
            };
            yield put(fetchActions.fetchMovieDetailSuccess(MovieDetail));
            yield put(push(`/item/${Id}`));
        }
    } catch (e) {
        console.log(e);
    }
}
function* requestMovieBySearch(searchKey: string, page: number) {
    yield put({type: actionTypes.FETCH.FETCH_START});
    yield delay(2000);
    const data = yield api.fetchMovieBySearch(searchKey, page);
    try {
        if (data.Error) {
            console.log(data.Error);
            yield put({type: actionTypes.FETCH.FETCH_END});
        } else {
            const Movies = yield data.Search.map((movie: any) => {
                return {
                    ...movie,
                    Year : parseInt(movie.Year, 10)
                    };
                });
            yield put(fetchActions.fetchSuccess(searchKey, data.totalResults, Movies));
            yield put({type: actionTypes.FETCH.FETCH_END});
            yield put(push(`/search/items/${searchKey}`));
        }   
    } catch (e) {
        console.log(e);
    }
    
}
function* watchFetchRequestBySearch() {
    while (true) {
        const { searchKey, page } = yield take(actionTypes.API.REQUEST_MOVIE_BY_SEARCH);    
        const getKey = yield select(selectSearchKey);
        const isEnd = yield select(selectTotalNum);
        if ((getKey === searchKey && page === 1 ) || isEnd) {
            console.log('dont do that');    
        } else {
            yield fork(requestMovieBySearch, searchKey, page);
        }
    }
}
function* watchFetchRequestById() {
    while (true) {
        const { Id } = yield take(actionTypes.API.REQUEST_MOVIE_BY_ID);
        yield fork(requestMovieById, Id);
    }
}

export default {
    watchFetchRequestById,
    watchFetchRequestBySearch,
};

import { take, call, fork, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import api from '../../utils/api';
import fetchActions from '../actions/fetchActions';
import actionTypes from '../actions/actionTypes';
import { RootState } from '../reducers/';
const selectSearchKey = (state: RootState) => state.SearchState.currentSearchKey;
const selectTotalNum = (state: RootState) => {
    if (state.SearchState.currentSearchKey && state.SearchState.Movies[state.SearchState.currentSearchKey].Movies) {
        return state.SearchState.Movies[state.SearchState.currentSearchKey].currentPage 
        === state.SearchState.Movies[state.SearchState.currentSearchKey].totalPage;
    }
    return false;
};
function* requestMovieById(Id: string) {
    try {
        const data = yield api.fetchMovieById(Id);
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}
function* requestMovieBySearch(searchKey: string, page: number) {
    yield put({type: actionTypes.FETCH.FETCH_START});
    yield delay(2000);
    try {
        const data = yield api.fetchMovieBySearch(searchKey, page);
        if (data) {
            const Movies = yield data.Search.map((movie: any) => {
                return {
                    ...movie,
                    Year : parseInt(movie.Year, 10)
                    };
            });
            yield put(fetchActions.fetchSuccess(searchKey, data.totalResults, Movies));
            yield put({type: actionTypes.FETCH.FETCH_END});
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
function* watchFetchRequestByTitle() {
    const { Id } = yield take(actionTypes.API.REQUEST_MOVIE_BY_ID);
    yield put({type: actionTypes.FETCH.FETCH_START});
    yield call(requestMovieById, Id);
    
}
export default {
    watchFetchRequestByTitle,
    watchFetchRequestBySearch
};

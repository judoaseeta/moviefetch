import { take, call, fork, put, select, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import api from '../../utils/api';
import changeStateActions from '../actions/changeStateActions';
import fetchActions from '../actions/fetchActions';
import actionTypes from '../actions/actionTypes';
import { RootState } from '../reducers/';
import { push } from 'react-router-redux';
import { batchActions } from 'redux-action-batcher';
const selectMovieRepliesLength = (movieId: string) => (state: RootState) => {
    if (state.ReplyState[movieId].replies !== null) {
        return (<Array<Reply>> state.ReplyState[movieId].replies).length;
    }
    return null;
};
const selectUserName = (state: RootState) => state.AuthState.userName;
// worker sagas.
function* requestMovieById(Id: string) {
    yield put({type: actionTypes.FETCH.FETCH_START});
    const data = yield call(api.fetchMovieById, Id);
    let MovieDetail: MovieById;
    try {
        if (data.Response === false) {
            yield put(batchActions(
                changeStateActions
                    .toastOn(`Error happens during fetching due to ${data.Error}`, 'Request Movie Detail'),
                {type: actionTypes.FETCH.FETCH_END}
            ));
        } else {
            MovieDetail = {
                ...data
            };
            yield put(batchActions(
                fetchActions.fetchMovieDetailSuccess(MovieDetail),
                {type: actionTypes.FETCH.FETCH_END},
                push(`/item/${Id}`)
            ));
        }
    } catch (e) {
        yield put(batchActions(
            changeStateActions.toastOn(e.message , 'Request MovieDetail'),
            {type: actionTypes.FETCH.FETCH_END}
        ));
    }
}
function* requestMovieBySearch(searchKey: string, page: number) {
    yield put({type: actionTypes.FETCH.FETCH_START});
    const {data, timeout} = yield race({
        data: call(api.fetchMovieBySearch, searchKey, page),
        timeout: call(delay, 6000)
    });
    if (!timeout) {
        try {
            if (data.Response === false) {
                yield put(batchActions(
                    changeStateActions.toastOn(`Error happens during fetching due to ${data.Error}`, 'Request Movie'),
                    {type: actionTypes.FETCH.FETCH_END}
                ));
            } else {
                const Movies = yield data.Search.map((movie: any) => {
                    return {
                        ...movie,
                        Year : parseInt(movie.Year, 10)
                        };
                    });
                yield put(batchActions(
                    fetchActions.fetchSuccess(searchKey, data.totalResults, Movies),
                    {type: actionTypes.FETCH.FETCH_END},
                    push(`/search/items/${searchKey}`)
                ));
            }   
        } catch (e) {
            yield put(batchActions(
                {type: actionTypes.FETCH.FETCH_END},
                changeStateActions.toastOn(e.message , 'Request Movies'),  
            ));
        }
    } else if (timeout) {
        yield put(batchActions(
            {type: actionTypes.FETCH.FETCH_END},
            changeStateActions.toastOn('TIMEOUT try it again later' , 'Request Movies'),
        ));
    }
}
function* requestMovieReplies(movieId: string) {
    const data = yield call(api.getReplies, movieId);
    const fetchtedReplies = (data !== null) && (data.replies !== null) ? data.replies : null;
    try {
        yield put(fetchActions.fetchMovieReplies(fetchtedReplies, movieId));
    } catch (e) {
        yield put(changeStateActions.toastOn(e.message , 'Request Movie reviews'));
    }
}
function* requestPostReply(movieId: string, content: string, rating: number, token: string) {
    try {
        const userName = yield select(selectUserName);
        yield call(api.postReplies, movieId, content, rating, userName, token);
    } catch (e) {
        yield put(changeStateActions.toastOn(e.message , 'Post Movie your review'));
    }
    yield call(requestMovieReplies, movieId);
}
function* requestPutReply(movieId: string, content: string, rating: number, token: string) {
    try {
        const userName = yield select(selectUserName);
        yield call(api.putReplies, movieId, content, rating, userName, token);
    } catch (e) {
        yield put(changeStateActions.toastOn(e.message , 'Post Movie your review'));
    }
    yield call(requestMovieReplies, movieId);
}
// watcher sagas.
function* watchFetchRequestBySearch() {
    while (true) {
        const { searchKey, page } = yield take(actionTypes.API.REQUEST_MOVIE_BY_SEARCH);
        yield fork(requestMovieBySearch, searchKey, page);
    }
}
function* watchFetchRequestById() {
    while (true) {
        const { Id } = yield take(actionTypes.API.REQUEST_MOVIE_BY_ID);
        yield fork(requestMovieById, Id);
    }
}
function* watchUpdateReplies () {
    while (true) {
        const { movieId, content, rating, token } = yield take(actionTypes.API.REQUEST_POST_REPLY); 
        const getLength = yield select(selectMovieRepliesLength(movieId));
        getLength === null 
        ? yield call(requestPostReply, movieId, content, rating, token)
        : yield call(requestPutReply, movieId, content, rating, token );
    }
}
function* watchGetReplies() {
    while (true) {
        const { movieId } = yield take(actionTypes.API.REQUEST_MOVIE_REPLY);
        yield fork(requestMovieReplies, movieId);
    }
}
export default {
    watchFetchRequestById,
    watchFetchRequestBySearch,
    watchGetReplies,
    watchUpdateReplies
};

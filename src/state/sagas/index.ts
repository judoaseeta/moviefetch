// import logger from './logger';
import authSaga from './authSaga';
import fetchSaga from './fetchSaga';
export default function* rootSaga() {
    yield [
        // logger() - removed,
        // appStatus,

        // fetch
        fetchSaga.watchFetchRequestById(),
        fetchSaga.watchFetchRequestBySearch(),
        fetchSaga.watchGetReplies(),
        fetchSaga.watchUpdateReplies(),
        // auth
        authSaga.watchAuthFlow(),
        authSaga.watchConfirm(),
        authSaga.watchSignInRequest(),
        authSaga.watchSignUpRequest()
    ];
} 
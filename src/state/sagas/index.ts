// import logger from './logger';
import fetchSaga from './fetchSaga';
export default function* rootSaga() {
    yield [
        // logger(),
        fetchSaga.watchFetchRequestById(),
        fetchSaga.watchFetchRequestBySearch()
    ];
} 
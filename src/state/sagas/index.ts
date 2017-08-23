import logger from './logger';
import fetchSaga from './fetchSaga';
export default function* rootSaga() {
    yield [
        logger(),
        fetchSaga.watchFetchRequestByTitle(),
        fetchSaga.watchFetchRequestBySearch()
    ];
} 
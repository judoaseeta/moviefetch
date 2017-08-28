import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers/';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
export const history =  createHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);
sagaMiddleware.run(rootSaga);
export default store;
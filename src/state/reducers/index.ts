import { combineReducers } from 'redux';
import appStatus, { State as AppState } from './appStatus';
import searchReducer, { State as SearchState } from './searchReducer';
import queryReducer, { State as QueryState } from './queryReducer';
import movieReducer, { State as MovieDetailState } from './movieReducer';
import { routerReducer } from 'react-router-redux';
export type RootState = {
    AppState: AppState,
    MovieDetailState: MovieDetailState
    SearchState: SearchState,
    QueryState: QueryState
};
const rootReducer = combineReducers<RootState>({
    AppState: appStatus,
    MovieDetailState: movieReducer,
    SearchState: searchReducer,
    QueryState: queryReducer,
    router: routerReducer
});
export default rootReducer;
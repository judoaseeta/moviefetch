import { combineReducers } from 'redux';
import appStatus, { State as AppState } from './appStatus';
import searchReducer, { State as SearchState } from './searchReducer';
import queryReducer, { State as QueryState } from './queryReducer';
export type RootState = {
    AppState: AppState,
    SearchState: SearchState,
    QueryState: QueryState
};
const rootReducer = combineReducers<RootState>({
    AppState: appStatus,
    SearchState: searchReducer,
    QueryState: queryReducer
});
export default rootReducer;
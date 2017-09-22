import { combineReducers } from 'redux';
import appStatus, { State as AppState } from './appStatus';
import authReducer, {State as AuthState } from './authReducer';
import searchReducer, { State as SearchState } from './searchReducer';
import movieReducer, { State as MovieDetailState } from './movieReducer';
import replyReducer, { State as ReplyState } from './replyReducer';
import { routerReducer, RouterState } from 'react-router-redux';
export type RootState = {
    AppState: AppState,
    AuthState: AuthState,
    MovieDetailState: MovieDetailState,
    ReplyState: ReplyState,
    SearchState: SearchState,
    router: RouterState
};
export type WholeState = {
    AppState: AppState,
    AuthState: AuthState,
    MovieDetailState: MovieDetailState,
    SearchState: SearchState,
};
const rootReducer = combineReducers<RootState>({
    AppState: appStatus,
    AuthState: authReducer,
    MovieDetailState: movieReducer,
    ReplyState: replyReducer,
    SearchState: searchReducer,
    router: routerReducer
});
export default rootReducer;
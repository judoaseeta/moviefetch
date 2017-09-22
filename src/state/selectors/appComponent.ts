import { RootState } from '../reducers';
import { createSelector } from 'reselect';
const appState = 
(state: RootState) => state.AppState;
const authState = 
(state: RootState) => state.AuthState;
export const getAppState = () => {
    return createSelector(
        [appState],
        state => state
    );
};
export const getAuthState = () => {
    return createSelector(
        [authState],
        state =>  state
    );
};
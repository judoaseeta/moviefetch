import { RootState } from '../reducers';
import { createSelector } from 'reselect';
const getKeyfunction = 
(state: RootState) => {
    return {
        currentSearchKey: state.SearchState.currentSearchKey,
        searchKeys: state.SearchState.searchKeys
    };
};
export const getKeys = () => {
    return createSelector(
        [getKeyfunction],
        keys =>  keys
    );
};

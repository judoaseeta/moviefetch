import actionTypes from '../actions/actionTypes';
import { MoviesContainer } from '../../utils/movieContainer';
export const enum Enum {
    NonSort,
    SortByAscYear,
    SortByDescYear
}
export type State = {
    Movies:  { 
        [key: string]: MoviesContainer 
    }
    currentSearchKey: string;
    searchKeys: Set<string>;
    failure: string;
};

const initialState = {
    Movies: {},
    currentSearchKey: '',
    failure: '',
    searchKeys: new Set(),
};
const searchReducer = (state: State = initialState, action: FetchMovieBySearch) => {
    switch (action.type) {
        case actionTypes.FETCH.FETCH_SUCCESS:
        if (!state.searchKeys.has(action.searchKey)) {
            return {
                ...state,
                currentSearchKey: action.searchKey,
                searchKeys: state.searchKeys.add(action.searchKey),
                Movies: {...state.Movies, [action.searchKey]: makeNewMovie(action)}
            };
            
        }
        if ((action.searchKey === state.currentSearchKey) && state.searchKeys.has(action.searchKey)) {
            state.Movies[state.currentSearchKey].setMovies(action.Movies);
            return {
                ...state,
                Movies: {...state.Movies }
            };
        }
        return state;
        case actionTypes.FETCH.FETCH_FAIL:
            return {
                ...initialState,
                failure: 'Something was wrong'
            };
        case actionTypes.CHANGE_SEARCH_STATE.REQUEST_SWITCH_MOVIE:
            return {
                ...state,
                currentSearchKey: action.searchKey
            };
        case actionTypes.CHANGE_SEARCH_STATE.SORT_BY_NONE:
            state.Movies[state.currentSearchKey].changeSorted(Enum.NonSort);
            return {
                ...state,
                Movies: {...state.Movies }
            };
        case actionTypes.CHANGE_SEARCH_STATE.SORT_BY_ASC:
            state.Movies[state.currentSearchKey].changeSorted(Enum.SortByAscYear);
            return {
                ...state,
                Movies: {...state.Movies } 
            };
        case actionTypes.CHANGE_SEARCH_STATE.SORT_BY_DESC:
            state.Movies[state.currentSearchKey].changeSorted(Enum.SortByDescYear);
            return {
                ...state,
                Movies: {...state.Movies }
            };
        default: return state;
    }
};
function makeNewMovie(action: FetchMovieBySearch): MoviesContainer {
    return new MoviesContainer(action.Movies, action.total);
}
export default searchReducer;
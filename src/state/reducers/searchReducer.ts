import actionTypes from '../actions/actionTypes';
export const enum MovieSort {
    NON_SORT = 1,
    SORT_BY_ASC,
    SORT_BY_DESC
}
export type State = {
    Movies:  { 
       [key: string]: MovieListContainer
    }
    currentSearchKey: string;
    searchKeys: Set<string>;
};
export interface MovieListContainer {
    Movies: MovieBySearch[];
    currentPage: number;
    totalNum: 0;
    totalPage: 0;
    sorted: MovieSort;
    lastScrollY: number;
}
interface ChangeSearchStatAction extends Action {
    sort: MovieSort;
}
const initialState = {
    Movies: {},
    currentSearchKey: '',
    searchKeys: new Set(),
};
const searchReducer = 
(state: State = initialState, action: FetchMovieBySearch & ChangeSearchStatAction & SaveLastScrollY) => {
    switch (action.type) {
        case actionTypes.FETCH.FETCH_SUCCESS:
        return fetchReducer(state, action);
        case actionTypes.CHANGE_SEARCH_STATE.REQUEST_SWITCH_MOVIE:
            return {
                ...state,
                currentSearchKey: action.searchKey
            };
        case actionTypes.CHANGE_SEARCH_STATE.CHANGE_SORT:
            return sortFunction(state, action.sort);
        case actionTypes.CHANGE_SEARCH_STATE.SET_LAST_SCROLLY:
            return setScrollY(state, action.scrollY);
        default: return state;
    }
};
const fetchReducer = (state: State, action: FetchMovieBySearch ) => {
    // it will determine search result of dispatched action 
    // is already exists or not.
    if (!state.searchKeys.has(action.searchKey)) {
        return {
            ...state,
            currentSearchKey: action.searchKey,
            searchKeys: state.searchKeys.add(action.searchKey),
            Movies: {
                ...state.Movies, 
                [action.searchKey]: {
                    Movies: action.Movies,
                    currentPage: 1,
                    totalPage: Math.floor(action.total / 10) + 1,
                    totalNum: action.total,
                    sorted: MovieSort.NON_SORT,
                    lastScrollY: 0
                }
            }
        };
    } else {
        return {
            ...state,
            Movies: {
                ...state.Movies,
                [action.searchKey]: {
                    ...state.Movies[action.searchKey],
                    Movies: state.Movies[action.searchKey].Movies.concat(action.Movies),
                    currentPage: state.Movies[action.searchKey].currentPage + 1
                }
            }
    };
    }
};
const sortFunction = (state: State, type: MovieSort) => {
    return {
        ...state,
        Movies: {
            ...state.Movies,
            [state.currentSearchKey]: {
                ...state.Movies[state.currentSearchKey],
                sorted: type
            }
        }
    };
};
const setScrollY = (state: State, scrollY: number) => {
    return {
        ...state,
        Movies: {
            ...state.Movies,
            [state.currentSearchKey]: {
                ...state.Movies[state.currentSearchKey],
                lastScrollY: scrollY
            }
        }
    };
};
export default searchReducer;
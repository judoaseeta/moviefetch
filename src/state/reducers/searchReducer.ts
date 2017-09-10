import actionTypes from '../actions/actionTypes';
export const enum Enum {
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
    sorted: Enum;
}
const initialState = {
    Movies: {},
    currentSearchKey: '',
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
                Movies: {
                    ...state.Movies, 
                    [action.searchKey]: {
                        Movies: action.Movies,
                        currentPage: 1,
                        totalPage: Math.floor(action.total / 10) + 1,
                        totalNum: action.total,
                        sorted: Enum.NON_SORT,
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
        case actionTypes.CHANGE_SEARCH_STATE.REQUEST_SWITCH_MOVIE:
            return {
                ...state,
                currentSearchKey: action.searchKey
            };
        case actionTypes.CHANGE_SEARCH_STATE.SORT_BY_NONE:
            return {
                ...state,
                Movies: {
                    ...state.Movies,
                    [state.currentSearchKey]: {
                        ...state.Movies[state.currentSearchKey],
                        sorted: Enum.NON_SORT,
                    }
                }
            };
        case actionTypes.CHANGE_SEARCH_STATE.SORT_BY_ASC:
            return {
                ...state,
                Movies: {
                    ...state.Movies,
                    [state.currentSearchKey]: {
                        ...state.Movies[state.currentSearchKey],
                        sorted: Enum.SORT_BY_ASC
                    }
                } 
            };
        case actionTypes.CHANGE_SEARCH_STATE.SORT_BY_DESC:
            return {
                ...state,
                Movies: {
                    ...state.Movies,
                    [state.currentSearchKey]: {
                        ...state.Movies[state.currentSearchKey],
                        sorted: Enum.SORT_BY_DESC
                    }
                }
            };
        default: return state;
    }
};
export default searchReducer;
import actionTypes from '../actions/actionTypes';
export type State = {
    queryKey: string,
    queriedMovie: MovieBySearch[],
};
const initialState = {
    queryKey: '',
    queriedMovie: []
};
const queryReducer = (state: State =  initialState, action: FetchMovieByQuery) => {
    switch (action.type) {
        case actionTypes.FETCH.QUERY_SUCCESS :
            return {
                ...state,
                queryKey: action.searchKey,
                queriedMovie: action.Movies
            };
        default: return state;
    }
};
export default queryReducer;
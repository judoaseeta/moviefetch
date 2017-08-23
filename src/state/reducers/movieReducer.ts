import actionTypes from '../actions/actionTypes';
export type State = {
    queryKey: string,
    queriedMovie: MovieById[],
};
const initialState = {
    queryKey: '',
    queriedMovie: []
};
const movieReducer = (state: State =  initialState, action: FetchMovieByQuery) => {
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
export default movieReducer;
import actionTypes from '../actions/actionTypes';
export type State = {
    currentImdbId: string,
    movieDetails: {
        [key: string]: MovieById
    },
};
const initialState = {
    currentImdbId: '',
    movieDetails: {}
};
const movieReducer = (state: State =  initialState, action: FetchMovieById) => {
    switch (action.type) {
        case actionTypes.FETCH.FETCH_MOVIE_DETAIL_SUCCESS :
            return {
                ...state,
                currentImdbId: action.MovieDetail.imdbID,
                movieDetails: {
                    ...state.movieDetails,
                    [action.MovieDetail.imdbID]: action.MovieDetail
                }
            };
        default: return state;
    }
};
export default movieReducer; 
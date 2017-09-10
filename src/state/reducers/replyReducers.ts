import actionTypes from '../actions/actionTypes';
export type State = {
    Replies: {
        [key: string]: Reply[] | null;
    }
};
const initialState = {
   Replies: {}
};
const movieReducer = (state: State =  initialState, action: FetchMovieReplies) => {
    switch (action.type) {
        case actionTypes.FETCH.FETCH_MOVIE_REPLIES: 
            return {
                Replies: {
                    ...state.Replies,
                    [action.movieId]: action.replies
                }
            };
        default: return state;
    }
};
export default movieReducer; 
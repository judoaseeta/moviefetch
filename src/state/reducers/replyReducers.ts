import actionTypes from '../actions/actionTypes';
export const enum Enum {
    NonSort = 1,
    SortByRatingAsc,
    SortByRatingDesc,
    SortByDateRecent,
    SortyByDateOld
}
export type State = {
        [key: string]: {
            replies: Reply[] | null;
            sorted: Enum
        } 
};
interface ReplySortAction extends Action {
    sort: Enum;
    movieId: string;
}
const initialState = {
};
const movieReducer = (state: State =  initialState, action: FetchMovieReplies & ReplySortAction) => {
    if ( action.type === actionTypes.FETCH.FETCH_MOVIE_REPLIES) {
        return {
                ...state.Replies,
                [action.movieId]: {
                    replies: action.replies,
                    sorted: Enum.NonSort
                } 
        };
    } else if (action.type === actionTypes.REPLY.SORT_REPLY) {
        return sortReducer(state, action.movieId, action.sort);
    }
    return state;
};
const sortReducer = (state: State, id: string, sort: Enum) => {
    return {
                ...state.Replies,
                [id]: {
                    ...state.Replies[id],
                    sorted: sort
                }
    };
};
export default movieReducer; 
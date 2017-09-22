import actionTypes from '../actions/actionTypes';
export const enum Enum {
    NonSort = 1,
    SortByRatingAsc,
    SortByRatingDesc,
    SortByDateRecent,
    SortyByDateOld
}
export type RepliesType = {
    replies: Reply[] | null;
    sorted: Enum;
};
export type State = {
        [key: string]: RepliesType
};
interface ReplySortAction extends Action {
    sort: Enum;
    movieId: string;
}
const initialState = {
};
const replyReducer = (state: State =  initialState, action: FetchMovieReplies & ReplySortAction) => {
    if ( action.type === actionTypes.FETCH.FETCH_MOVIE_REPLIES) {
        return {
                ...state,
                [action.movieId]: {
                    replies: action.replies,
                    sorted: Enum.NonSort
                } 
        };
    } else if (action.type === actionTypes.REPLY.SORT_REPLY) {
        return {
            ...state,
            [action.movieId]: {
                ...state[action.movieId],
                sorted: action.sort
            }
        };
    }
    return state;
};  
export default replyReducer; 
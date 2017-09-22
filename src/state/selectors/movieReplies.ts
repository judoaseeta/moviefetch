import { RootState } from '../reducers';
import { Enum } from '../reducers/replyReducer';
import { MergedProps } from '../../containers/MovieReplies';
import { createSelector } from 'reselect';
// get state from store;
const auth = (state: RootState) => state.AuthState;
const MovieReplies = 
(state: RootState, props: MergedProps) => {
    if (state.ReplyState[props.match.params.id]) {
        return state.ReplyState[props.match.params.id];
    }
    return null;
};
export const getAuthState = () => {
    return createSelector(
        [auth],
        authState => authState
    );
};
// create selectors.
export const getMovieReplies = () => {
    return createSelector(
        [MovieReplies, auth],
        (replies, auth) =>  {
            // to find out whether authenticated user's reply is existed or not.
            if (replies && replies.replies && auth.userName) {
                const result = sortReplies(replies.sorted, replies.replies);
                const userReplyIndex = result.findIndex(reply => reply.userName === auth.userName);
                const userReplyFirstReplie = 
                    userReplyIndex === -1 
                        ? result
                        : 
                            [result[userReplyIndex],
                            ...result.slice(0, userReplyIndex - 1), 
                            ...result.slice(userReplyIndex + 1, result.length)
                        ];
                return userReplyFirstReplie;
            // if not authenticated..
            } else if (replies !== null && replies.replies !== null) {
                return sortReplies(replies.sorted, replies.replies);
            } 
            return null;
        }
    );
};
// sorting replies in 4 ways.
const sortReplies = (sort: Enum, replies: Reply[]) => {
    switch (sort) {
        case Enum.NonSort: 
            return replies;
        case Enum.SortByRatingAsc:
            const ascSorted = replies.sort((a, b) => b.rating - a.rating );
            return ascSorted;
        case Enum.SortByRatingDesc:
            const descSorted = replies.sort((a, b) => a.rating - b.rating );
            return descSorted;
        case Enum.SortByDateRecent:
            const sortedRecent = replies.sort((a, b) => b.createdAt - a.createdAt );
            return sortedRecent;
        case Enum.SortyByDateOld:
            const sortedOld = replies.sort((a, b) => a.createdAt - b.createdAt );
            return sortedOld;
        default: return replies;
    }
};
import actionTypes from './actionTypes';
import { Enum } from '../reducers/replyReducer';
const sortReplies = (movieId: string, sort: Enum) => {
    return {
        type: actionTypes.REPLY.SORT_REPLY,
        sort: sort,
        movieId: movieId
    };
};
export default sortReplies;
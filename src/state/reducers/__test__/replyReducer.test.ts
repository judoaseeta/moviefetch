import data from './replyReducer.data';
import actionTypes from '../../actions/actionTypes';
import replyReducer, { Enum } from '../replyReducer';
describe('testing replyReducer', () => {
    it('should update fetched replies', () => {
        // given
        const movieId = 'fewfweew';
        const initialState = {};
        const fakeAction = {
            type: actionTypes.FETCH.FETCH_MOVIE_REPLIES,
            replies: data,
            movieId: movieId
        };
        // when
        const reducer = replyReducer(initialState, fakeAction as any);
        // then
        expect(reducer[movieId].replies).toEqual(data);
    });
    it('should be sorted', () => {
        // given
        const movieId = 'zzzsss22';
        const initialState = {
            [movieId]: {
                replies: data,
                sorted: Enum.NonSort
            }
        };
        const fakeAction = {
            type: actionTypes.REPLY.SORT_REPLY,
            sort: Enum.SortByRatingAsc,
            movieId: movieId
        };
        // when
        const reducer = replyReducer(initialState, fakeAction as any );
        // then
        expect(reducer[movieId].sorted).toEqual(Enum.SortByRatingAsc);
    });
});
import MovieReducer from '../movieReducer';
import actionTypes from  '../../actions/actionTypes';
import data from './movieReducer.data';
describe('testing movieDetail Reducer', () => {
    it('should be able to update moviedetail', () => {
        // given
        const imdbId = 'tt0167260';
        const initialState = {
            currentImdbId: '',
            movieDetails: {}
        };
        const fakeAction = {
            type: actionTypes.FETCH.FETCH_MOVIE_DETAIL_SUCCESS,
            MovieDetail: data
        };
        // when
        const reducer = MovieReducer(initialState, fakeAction as any );
        // then
        expect(reducer.currentImdbId).toEqual(data.imdbID);
        expect(reducer.movieDetails[imdbId]).toEqual(data);
    });
});
import actionTypes from '../actionTypes';
import apiActions from '../apiActions'; 
describe('apiAction', () => {
    it('requestById', () => {
        const expected = {
            type: actionTypes.API.REQUEST_MOVIE_BY_ID,
            Id: 'blhah'
        };
        expect(apiActions.requestMovieById('blhah')).toEqual(expected);
    });
    it('requestBySearch(initial fetch) should return page1', () => {
        const expected = {
            type: actionTypes.API.REQUEST_MOVIE_BY_SEARCH,
            searchKey: 'King Kong',
            page: 1
        };
        expect(apiActions.requestMovieBySearch('King Kong')).toEqual(expected);
    });
    it('requestBySearch(sequential fetch) should return page++', () => {
        const expected = {
            type: actionTypes.API.REQUEST_MOVIE_BY_SEARCH,
            searchKey: 'Tarzan',
            page: 2
        };
        expect(apiActions.requestMovieBySearch('Tarzan', 2)).toEqual(expected);
    });
});
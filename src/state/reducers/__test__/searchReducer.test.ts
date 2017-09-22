import searchReducer, { MovieSort } from '../searchReducer';
import data, { page2 } from './searchReducer.data';
import actionTypes from '../../actions/actionTypes';
describe('SearchReducer', () => {
    it('should be able to pass movie list', () => {
        // given
        const initialState = {
            Movies: {},
            currentSearchKey: '',
            searchKeys: new Set(),
        };
        const searchKey = 'king';
        const fakeAction = {
                type: actionTypes.FETCH.FETCH_SUCCESS,
                Movies: data.Movies,
                searchKey: searchKey,
                total: data.totalResults,
                page: 1
            };
        // when
        const reducer = searchReducer(initialState, fakeAction as any);
        // then
        expect(reducer.Movies[searchKey].Movies).toEqual(data.Movies);
    });
    it('should be able to pass movielist more', () => {
        // given
        const searchKey = 'king';
        const set = new Set();
        const initialState = {
            Movies: {
                [searchKey]: {
                    Movies: data.Movies,
                    currentPage: 1,
                    totalNum: 2567,
                    totalPage: 257,
                    sorted: MovieSort.NON_SORT,
                    lastScrollY: 0
                }
            },
            currentSearchKey: searchKey,
            searchKeys: set.add(searchKey)
        };
        const fakeAction = {
                type: actionTypes.FETCH.FETCH_SUCCESS,
                Movies: page2.Movies,
                searchKey: searchKey,
                total: page2.totalResults,
                page: 2
        };
        // when
        const reducer = searchReducer(initialState as any, fakeAction as any);
        // then
        expect(reducer.Movies[searchKey].currentPage).toBe(2);
        expect(reducer.Movies[searchKey].Movies.length).toBe(20);
    });
    it('should be able to change sort', () => {
        // given
        const searchKey = 'king';
        const initialState = {
            Movies: {
                [searchKey]: {
                    Movies: data.Movies,
                    currentPage: 1,
                    totalNum: 2567,
                    totalPage: 257,
                    sorted: MovieSort.NON_SORT,
                    lastScrollY: 0
                }
            },
            currentSearchKey: searchKey,
            searchKeys: new Set(searchKey) 
        };
        const fakeAction = {
            type: actionTypes.CHANGE_SEARCH_STATE.CHANGE_SORT,
            sort: MovieSort.SORT_BY_ASC
        };
        // when
        const reducer = searchReducer(initialState as any, fakeAction as any);
        // then
        expect(reducer.Movies[searchKey].sorted).toEqual(MovieSort.SORT_BY_ASC);
    });
    it('should be able to set lastScrollY value', () => {
        // given
        const searchKey = 'king';
        const initialState = {
            Movies: {
                [searchKey]: {
                    Movies: data.Movies,
                    currentPage: 1,
                    totalNum: 2567,
                    totalPage: 257,
                    sorted: MovieSort.NON_SORT,
                    lastScrollY: 0
                }
            },
            currentSearchKey: searchKey,
            searchKeys: new Set(searchKey) 
        };
        const fakeAction = {
            type: actionTypes.CHANGE_SEARCH_STATE.SET_LAST_SCROLLY,
            scrollY: 1500
        };
        // when
        const reducer = searchReducer(initialState as any, fakeAction as any);
        // then
        expect(reducer.Movies[searchKey].lastScrollY).toBe(1500);
    });
});
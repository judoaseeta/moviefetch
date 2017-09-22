import { RootState } from '../reducers';
import { MergedProps } from '../../containers/MovieList';
import { createSelector } from 'reselect';
const isFetch = (state: RootState) => state.AppState.isFetching; 
import { MovieSort } from '../reducers/searchReducer';
const Movies = 
(state: RootState, props: MergedProps) => {
    return state.SearchState.Movies[props.match.params.item];
};
export const getIsFetching = () => {
    return createSelector(
        [isFetch],
        isFetching => isFetching
    );
};
export const getMovieList = () => {
    return createSelector(
        [ Movies ],
        (movielist) => {
            if (movielist && movielist.sorted) { 
                switch (movielist.sorted) {
                    case MovieSort.NON_SORT: 
                        return movielist;
                    case MovieSort.SORT_BY_ASC: 
                    const AscMovies = [...movielist.Movies].sort((a, b ) => b.Year - a.Year );
                    return {
                         ...movielist,
                         Movies: AscMovies
                    };
                    case MovieSort.SORT_BY_DESC:
                    const DescMovies = [...movielist.Movies].sort((a, b) => a.Year - b.Year);
                    return {
                         ...movielist,
                         Movies: DescMovies
                    };
                    default: return movielist;
                }  
            }
            return null;        
        }
    );
};
const searchKeys = (state: RootState) => {
    return {
        searchKeys: state.SearchState.searchKeys,
    };
};
export const getSearchKeys = () => {
    return createSelector(
        [searchKeys],
        keys => keys
    );
};
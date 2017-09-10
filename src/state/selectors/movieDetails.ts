import { RootState } from '../reducers';
import { MergedProps } from '../../containers/MovieDetail';
import { createSelector } from 'reselect';
const MovieDetail = 
(state: RootState, props: MergedProps) => state.MovieDetailState.movieDetails[props.match.params.id];
const getMovieDetail = () => {
    return createSelector(
        [MovieDetail],
        detail =>  detail
    );
};
export default getMovieDetail;
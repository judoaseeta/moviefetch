import * as React from 'react';
import MovieSummary from '../components/MovieSummary';
import { Dummy, MovieListContainer } from '../components/styled';
import { State as SearchState } from '../state/reducers/searchReducer';
import { match, withRouter } from 'react-router-dom';
type MovieListProps = {
    isFetching: boolean;
    match: MovielistMatchProps
    searchState: SearchState,
    requestSwitch: (searchKey: string) => RequestMovieByQuery;
    requestMovieBySearch: (searchKey: string, page?: number) => RequestMovieBySearch
};
type MovielistMatchProps = match<{item: string}>;
class MovieList extends React.PureComponent<MovieListProps, {}> {
    componentDidMount() {
        console.log('mount completed');
        this.props.requestMovieBySearch(this.props.match.params.item);
        window.addEventListener('scroll', () => {
            const isKeySame = () => this.props.searchState.currentSearchKey === this.props.match.params.item;
            if (isKeySame && !this.props.isFetching 
                && ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
                this.props.requestMovieBySearch(
                    this.props.match.params.item, 
                    this.props.searchState.Movies[this.props.match.params.item].currentPage + 1);
            }
        });
    }
    componentWillReceiveProps(nextProps: MovieListProps) {
        if (this.props.match.params.item !== nextProps.match.params.item) {
            if (this.props.searchState.searchKeys.has(nextProps.match.params.item)) {
                this.props.requestSwitch(nextProps.match.params.item);
            }
            this.props.requestMovieBySearch(nextProps.match.params.item);
        }
    }
    render() {
        const { currentSearchKey } = this.props.searchState;
        const { searchState } = this.props;
        return (
            <MovieListContainer>
                {!!currentSearchKey && searchState.Movies[currentSearchKey].Movies.length !== 0 
                ? searchState.Movies[currentSearchKey].getMovies()
                    .map((movie: MovieBySearch) => {
                    return (
                            <MovieSummary 
                                key={(movie.imdbID + Math.random().toString())}
                                Movie={movie}
                            />
                            );
                    })
                : null}
                <Dummy>.</Dummy>
            </MovieListContainer>
        );
    }
}

export default withRouter(MovieList as React.ComponentType<any>);
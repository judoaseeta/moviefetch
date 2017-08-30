import * as React from 'react';
import MovieSummary from '../components/MovieSummary';
import { MovieListContainer } from '../components/styled';
import { State as SearchState } from '../state/reducers/searchReducer';
import { match, withRouter } from 'react-router-dom';
import * as H from 'history';
type MovieListProps = {
    isFetching: boolean;
    history: H.History;
    location: H.Location;
    match: MovielistMatchProps;
    searchState: SearchState;
    requestSwitch: (searchKey: string) => RequestMovieByQuery;
    requestMovieById: (id: string) => RequestMovieById;
    requestMovieBySearch: (searchKey: string, page?: number) => RequestMovieBySearch
};
type MovielistMatchProps = match<{item: string}>;
class MovieList extends React.Component<MovieListProps, {}> {
    componentDidMount() {
        if (!this.props.searchState.searchKeys.has(this.props.match.params.item)) {
            this.props.requestMovieBySearch(this.props.match.params.item);
        }
        this.historyListner();
        this.addListener();
    }
    componentWillReceiveProps(nextProps: MovieListProps) {
        const isParamChanged = () => this.props.match.params.item !== nextProps.match.params.item;
        if (isParamChanged()) {
            if (this.props.searchState.searchKeys.has(nextProps.match.params.item)) {
                this.props.requestSwitch(nextProps.match.params.item);
                this.addListener();
            } else {
                this.props.requestMovieBySearch(nextProps.match.params.item);
            }
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
                                requestMovieById={this.props.requestMovieById}
                            />
                            );
                    })
                : null}
            </MovieListContainer>
        );
    }
    
    private addListener = (): void => {
        window.addEventListener('scroll', this.infiniteScroller);
    }
    private historyListner = (): void => {
        this.props.history.listen((location) => {
            if (!location.pathname.includes('/search/items/')) {
                this.offEventListener();
                this.historyListner();
            }
        });
    }
    private infiniteScroller = (): void => {
        const isKeySame = () => this.props.searchState.currentSearchKey === this.props.match.params.item;
        if (isKeySame && !this.props.isFetching 
            && ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
            this.props.requestMovieBySearch(
                this.props.match.params.item, 
                this.props.searchState.Movies[this.props.match.params.item].currentPage + 1);
        }
    }
    private offEventListener = (): void => {
        window.removeEventListener('scroll', this.infiniteScroller);
    }
}

export default withRouter(MovieList as React.ComponentType<any>);
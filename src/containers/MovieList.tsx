// import react-related
import * as React from 'react';
import MovieSummary from '../components/MovieSummary';
import { MovieListContainer as Container } from '../components/styled';
// import redux-related
import { RootState } from '../state/reducers/';
import { getMovieList, getIsFetching, getSearchKeys } from '../state/selectors/movieList';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import apiActions from '../state/actions/apiActions';
import changeSearchStateActions from '../state/actions/changeSearchStateActions';
import { MovieListContainer } from '../state/reducers/searchReducer';
//  import router-related
import { match } from 'react-router-dom';
import * as H from 'history';
// props derived from state;
type MovieListProps = {
    isFetching: boolean;
    MovieList: MovieListContainer | null
    searchKeys: Set<string>;
};
// props merged by connect
export type MergedProps = {
    isFetching: boolean;
    history: H.History;
    location: H.Location;
    match: MovielistMatchProps;
    MovieList: MovieListContainer | null;
    searchKeys: Set<string>;
    requestSwitch: (searchKey: string) => RequestMovieByQuery;
    requestMovieById: (id: string) => RequestMovieById;
    requestMovieBySearch: (searchKey: string, page?: number) => RequestMovieBySearch
};
// props dispatch action
type DispatchProps = {
    requestSwitch: (searchKey: string) => RequestMovieByQuery;
    requestMovieById: (id: string) => RequestMovieById;
    requestMovieBySearch: (searchKey: string, page?: number) => RequestMovieBySearch
};
// route prop;
type MovielistMatchProps = match<{item: string}>;
// function return mapStateToProps 
// to make a environment for each component render and update;
const makeMapStateToProps = () => {
    const getList = getMovieList();
    const isFetching = getIsFetching();
    const searchKeys = getSearchKeys();
    const mapStateToProps = (state: RootState, props: MergedProps) => {
        return {
            isFetching: isFetching(state),
            MovieList: getList(state, props),
            searchKeys: searchKeys(state)
        };
    };
    return mapStateToProps;
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        requestMovieById: bindActionCreators(apiActions.requestMovieById, dispatch),
        requestMovieBySearch: bindActionCreators(apiActions.requestMovieBySearch, dispatch),
        requestSwitch: bindActionCreators(changeSearchStateActions.requestSwitch, dispatch)
    };
};
class MovieList extends React.Component<MergedProps, {}> {
    componentDidMount() {
        if (!this.props.searchKeys.has(this.props.match.params.item)) {
            this.props.requestMovieBySearch(this.props.match.params.item);
        }
        this.historyListener();
        this.addListener();
    }
    componentWillReceiveProps(nextProps: MergedProps) {
        const isParamChanged = this.props.match.params.item !== nextProps.match.params.item;
        if (isParamChanged) {
            if (this.props.searchKeys.has(nextProps.match.params.item)) {
                this.props.requestSwitch(nextProps.match.params.item);
                this.addListener();
            } else {
                this.props.requestMovieBySearch(nextProps.match.params.item);
            }
        }
    }
    render() {
        return (
            <Container>
                {this.props.MovieList
                ?   this.props.MovieList.Movies.map((movie: MovieBySearch) => {
                    return (
                            <MovieSummary 
                                key={(movie.imdbID + Math.random().toString())}
                                Movie={movie}
                                requestMovieById={this.props.requestMovieById}
                            />
                            );
                    })
                : null}
            </Container>
        );
    }
    private addListener = (): void => {
        window.addEventListener('scroll', this.infiniteScroller);
    }
    private historyListener = (): void => {
        this.props.history.listen((location) => {
            if (!location.pathname.includes('/search/items/')) {
                this.offEventListener();
                this.historyListener();
            }
        });
    }
    private infiniteScroller = (): void => {
        if (this.props.MovieList
            && (this.props.MovieList.currentPage !== this.props.MovieList.totalPage)
            && !this.props.isFetching 
            && ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
            this.props.requestMovieBySearch(
                this.props.match.params.item, 
                this.props.MovieList.currentPage + 1);
        }
    }
    private offEventListener = (): void => {
        window.removeEventListener('scroll', this.infiniteScroller);
    }
}

export default connect<MovieListProps, DispatchProps, MergedProps>(makeMapStateToProps, mapDispatchToProps )(MovieList);
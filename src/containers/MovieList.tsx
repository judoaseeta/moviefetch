// import react-related
import * as React from 'react';
import MovieSummary from '../components/MovieSummary';
import { MovieListContainer as Container, UpButton } from '../components/styled';
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
    keys: {
        searchKeys: Set<string>;
    }
};
// props merged by connect
export type MergedProps = {
    isFetching: boolean;
    history: H.History;
    location: H.Location;
    match: MovielistMatchProps;
    MovieList: MovieListContainer | null;
    keys: {
        searchKeys: Set<string>;
    }
    requestSwitch: (searchKey: string) => RequestMovieByQuery;
    requestMovieById: (id: string) => RequestMovieById;
    requestMovieBySearch: (searchKey: string, page?: number) => RequestMovieBySearch;
    saveLastScrollY: (scrollY: number) => SaveLastScrollY;
};
// props dispatch action
type DispatchProps = {
    requestSwitch: (searchKey: string) => RequestMovieByQuery;
    requestMovieById: (id: string) => RequestMovieById;
    requestMovieBySearch: (searchKey: string, page?: number) => RequestMovieBySearch;
    saveLastScrollY: (scrollY: number) => SaveLastScrollY
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
            keys: searchKeys(state)
        };
    };
    return mapStateToProps;
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        requestMovieById: bindActionCreators(apiActions.requestMovieById, dispatch),
        requestMovieBySearch: bindActionCreators(apiActions.requestMovieBySearch, dispatch),
        requestSwitch: bindActionCreators(changeSearchStateActions.requestSwitch, dispatch),
        saveLastScrollY: bindActionCreators(changeSearchStateActions.setLastScrollY, dispatch)
    };
};
class MovieList extends React.Component<MergedProps, {}> {
    componentDidMount() {
        const { MovieList, keys, match, requestMovieBySearch} = this.props;
        if (!keys.searchKeys.has(match.params.item)) {
            requestMovieBySearch(match.params.item);
        }
        if (MovieList && MovieList.lastScrollY) {
            window.scrollTo(0, MovieList.lastScrollY);
        }
        this.historyListener();
        this.addListener();
    }
    componentWillReceiveProps(nextProps: MergedProps) {
        const isParamChanged = this.props.match.params.item !== nextProps.match.params.item;
        const { keys, match, requestMovieBySearch, requestSwitch} = this.props;
        if (isParamChanged) {
            if (match.params.item !== nextProps.match.params.item && 
                keys.searchKeys.has(nextProps.match.params.item)) {
                requestSwitch(nextProps.match.params.item);
                this.historyListener();
                this.addListener();    
            } else {
                requestMovieBySearch(nextProps.match.params.item);
            }
        } 
    }
    /// will it works????
    componentDidUpdate(prevProps: MergedProps) {
        const { MovieList } = prevProps;
        if (MovieList && MovieList.lastScrollY) {
            window.scrollTo(0, MovieList.lastScrollY);
        }
    }
    render() {
        console.log(this.props);
        const { MovieList, requestMovieById } = this.props;
        return (
            <Container>
                {/* 
                    UpButton must be implement in order to harmonized with current button.
                */}
                <UpButton
                        onClick={(e) => {
                            window.scrollTo(0, 0);
                        }}    
                >
                    <i 
                        className={'fa fa-arrow-up fa-2x'} 
                        aria-hidden="true" 
                        
                    />
                </UpButton>
                {MovieList
                ?   MovieList.Movies.map((movie: MovieBySearch) => {
                    return (
                            <MovieSummary 
                                key={(movie.imdbID + Math.random().toString())}
                                Movie={movie}
                                requestMovieById={requestMovieById}
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
            if (!location.pathname.includes(`${this.props.match.params.item}`)) {
                this.saveScrollY();
                this.offEventListener();
                this.historyListener();
            }
        });
    }
    private infiniteScroller = (): void => {
        const { MovieList, isFetching, match, requestMovieBySearch} = this.props;
        if (MovieList
            && (MovieList.currentPage !== MovieList.totalPage)
            && !isFetching 
            && ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
            requestMovieBySearch(
                match.params.item, 
                MovieList.currentPage + 1);
        }
    }
    private saveScrollY = () => {
        this.props.saveLastScrollY(window.scrollY);
    }
    private offEventListener = (): void => {
        window.removeEventListener('scroll', this.infiniteScroller);
    }
}

export default connect<MovieListProps, DispatchProps, MergedProps>(makeMapStateToProps, mapDispatchToProps )(MovieList);
import * as React from 'react';
import Components from '../components/';
import Home from './Home';
import Modal from './Modal';
import { Route } from 'react-router-dom';
import SearchBar from '../containers/SearchBar';
import { AppContainer } from './styled';
import MovieDetail from '../containers/MovieDetail';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import apiActions from '../state/actions/apiActions';
import changeStateActions from '../state/actions/changeStateActions';
import changeSearchStateActions from '../state/actions/changeSearchStateActions';
import { RootState } from '../state/reducers';
import { match, withRouter } from 'react-router-dom';
import * as H from 'history';
const mapStateToProps = (state: RootState) => {
    return state;
  };
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
      apiActions: bindActionCreators(apiActions, dispatch),
      changeSearchStateActions: bindActionCreators(changeSearchStateActions, dispatch),
      changeStateActions: bindActionCreators(changeStateActions, dispatch)
    };
};
type AppProps = {
    match: match<string>
    history: H.History
    location: H.Location
};
const AppComponent: React.SFC<RootState & ActionList & AppProps> = (props) => (
    <div>
        <Modal 
            isFetching={props.AppState.isFetching}
        />
        <Components.Navbar />
        <AppContainer>
                <Route 
                    exact={true}
                    path="/"
                    component={Home}
                />
                <Route 
                    path="/search" 
                    render={() => 
                        <SearchBar
                            changeSearchStateActions={props.changeSearchStateActions}
                            changeStateActions={props.changeStateActions}
                            currentY={props.AppState.currentY}
                            history={props.history}
                            location={props.location}
                            match={props.match}
                            maxY={props.AppState.maxY}
                            isFetching={props.AppState.isFetching}
                            searchState={props.SearchState}
                            apiActions={props.apiActions}
                        />}
                />
                <Route 
                    path="/item/:id"
                    render={() => 
                        <MovieDetail
                            MovieDetail={props.MovieDetailState}
                            requestMovieById={props.apiActions.requestMovieById}
                        />
                    }
                />
        </AppContainer>
    </div>
);
const apps = connect(mapStateToProps, mapDispatchToProps)(AppComponent) as React.ComponentType<any>;
export default withRouter(apps);
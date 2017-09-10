import * as React from 'react';
import { SearchBarContainer } from '../components/styled';
import SearchBarInput from '../components/SearchBarInput';
import SearchBarPanel from '../components/SearchBarPanel';
import { match, Route, withRouter } from 'react-router-dom';
import { RootState } from '../state/reducers/';
import { State as AppState } from '../state/reducers/appStatus';
import { State as SearchState } from '../state/reducers/searchReducer';
import AsyncComponent from '../utils/asyncComponent';
import * as H from 'history';
import { MergedProps } from './MovieList';
import { bindActionCreators, Dispatch } from 'redux';
import apiActions from '../state/actions/apiActions';
import changeSearchStateActions from '../state/actions/changeSearchStateActions';
import { connect } from 'react-redux';
const MovieList = 
withRouter(AsyncComponent<MergedProps>(() => import('./MovieList')) as React.ComponentType<any>);
export type SearchBarProps = {
    history: H.History,   
    match: match<any>;
    appState: AppState;
    searchState: SearchState;
    apiActions: apiActions;
    changeSearchStateActions: changeSearchStateActions
};
type SearchBarState = {
    SearchBarKey: string;
    isPanelOpen: boolean;
};
const mapStateToProps = (state: RootState) => {
    return {
        appState: state.AppState,
        searchState: state.SearchState
    };
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        apiActions: bindActionCreators(apiActions, dispatch),
        changeSearchStateActions: bindActionCreators(changeSearchStateActions, dispatch)
    };
};
class SearchBar extends React.PureComponent<SearchBarProps, SearchBarState> {
    state = {
        SearchBarKey: '',
        isPanelOpen: false
    };
    componentDidMount() {
        this.addScrollListener();
        this.historyListener();
    }
    render() {
        return (
            <div>
                <SearchBarContainer>
                    <SearchBarPanel
                        changeSearchStateActions={this.props.changeSearchStateActions}
                        currentSearchKey={this.props.searchState.currentSearchKey}
                        history={this.props.history}
                        isPanelOpen={this.state.isPanelOpen}
                        searchKeys={this.props.searchState.searchKeys}
                        match={this.props.match}
                    />
                    <SearchBarInput
                        onChangeHandler={this.onChangeHandler}
                        onClickHandler={this.onFetchHandler}
                    />
                    <br />
                </SearchBarContainer>
                    <Route 
                        path={`${this.props.match.url}/items/:item`}
                        exact={true}
                        strict={true}
                        component={MovieList} 
                    />
            </div>
        );
    }
    private historyListener = () => {
        this.props.history.listen((location) => {
            if (!location.pathname.includes('/search')) {
                this.removeListener();
                this.historyListener();
            }
        });
    }
    private addScrollListener = () => {
        window.addEventListener('scroll', this.saveScrollValue);
    }   
    private removeListener = () => {
        window.removeEventListener('scroll', this.saveScrollValue);
    }
    private saveScrollValue = () => {
        if (window.scrollY >= 260) {
            this.setState({
                isPanelOpen: true
            });
        } else {
            this.setState({
                isPanelOpen: false
            });
        }
    }
    private onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
            this.setState({
                SearchBarKey: e.currentTarget.value.toLowerCase()
            });
    }
    private onFetchHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        this.props.apiActions.requestMovieBySearch(this.state.SearchBarKey);
        // change route via history.push is depreciated due to adapt react-router-redux. 
        // const location = `${this.props.match.url}/items/${this.state.SearchBarKey}`;
        // this.props.history.push(location);
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
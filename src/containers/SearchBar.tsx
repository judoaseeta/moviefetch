// react component
import * as React from 'react';
import { 
    SearchBarContainer, 
    SearchPanelButton,
    SearchPanelButtonHolder as Holder
} from '../components/styled';
import SearchBarPanel from '../components/SearchBarPanel';
import SearchBarInput from '../components/SearchBarInput';
// dependencies
import { match, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as H from 'history';
import AsyncComponent from '../utils/asyncComponent';
import { bindActionCreators, Dispatch } from 'redux';
// typescript related
import { RootState } from '../state/reducers/';
import { MergedProps } from './MovieList';
// Action dispatchers.
import apiActions from '../state/actions/apiActions';
import changeSearchStateActions from '../state/actions/changeSearchStateActions';
// Redux related.
import { getKeys } from '../state/selectors/searchBar';
const MovieList = 
withRouter(AsyncComponent<MergedProps>(() => import('./MovieList')) as React.ComponentType<any>);
export type SearchBarProps = {
    history: H.History,   
    match: match<any>;
    location: H.Location;
    searchState: {
        currentSearchKey: string;
        searchKeys: Set<string>;
    };
    apiActions: apiActions;
    changeSearchStateActions: changeSearchStateActions
};
type SearchBarState = {
    key: {
        [k: string]: string
    }
    isButtonFixed: boolean;
    isPanelOpen: boolean;
};
type MappedProps = {
    searchState: {
        currentSearchKey: string;
        searchKeys: Set<string>;
    }
};
type DispatchProps = {
    apiActions: apiActions;
    changeSearchStateActions: changeSearchStateActions
};
const makeMapStateToProps = () => {
    const keys = getKeys();
    const mapStateToProps = (state: RootState) => {
        return {
            searchState: keys(state)
        };
    };
    return mapStateToProps;
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        apiActions: bindActionCreators(apiActions, dispatch),
        changeSearchStateActions: bindActionCreators(changeSearchStateActions, dispatch)
    };
};
class SearchBar extends React.PureComponent<SearchBarProps, SearchBarState> {
    state = {
        key: {
            FilterKey: '',
            SearchBarKey: ''
        },
        isButtonFixed: false,
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
                    <SearchBarInput
                        onChangeHandler={this.onChangeHandler}
                        onClickHandler={this.onFetchHandler}
                        onKeyPressHandler={this.onKeyPressHandler}
                    />
                    {this.props.location.pathname.includes('items') 
                        ? <Holder
                            className={this.state.isButtonFixed ? 'fixed' : ''}
                        >
                        <SearchPanelButton
                            onClick={this.panelHandler}
                        >
                            <i className="fa fa-cog fa-2x" aria-hidden="true" />
                        </SearchPanelButton>
                        <SearchBarPanel
                            changeSearchStateActions={this.props.changeSearchStateActions}
                            currentSearchKey={this.props.searchState.currentSearchKey}
                            location={this.props.location}
                            history={this.props.history}
                            isPanelOpen={this.state.isPanelOpen}
                            onChangeHandler={this.onChangeHandler}
                            onKeyPressHandler={this.onKeyPressHandler}
                            searchKeys={this.props.searchState.searchKeys}
                            match={this.props.match}
                        />
                        </Holder>
                        : null
                    }
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
    private panelHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        this.setState({
            isPanelOpen: !this.state.isPanelOpen
        });
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
                isButtonFixed: true
            });
        } else {
            this.setState({
                isButtonFixed: false
            });
        }
    }
    private onChangeHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
        this.setState({
            key: {
                [e.currentTarget.name] : e.currentTarget.value
            }
        });
    }
    private fetchInvoker = (e: React.SyntheticEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === 'SearchBarKey') {
            let key = this.state.key.SearchBarKey;
            this.setState({
                key: {
                    SearchBarKey: ''
                } 
            });
            this.props.apiActions.requestMovieBySearch(key.toLowerCase());
        }
        if (e.currentTarget.name === 'FilterKey') {
            let key = this.state.key.FilterKey;
            this.setState({
                key: {
                    FilterKey: ''
                }
            });
            this.props.changeSearchStateActions.setFilterKey(key);
        }
        
    }
    private onFetchHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        this.fetchInvoker(e);
        // change route via history.push is removed due to adapt react-router-redux. 
        // const location = `${this.props.match.url}/items/${this.state.SearchBarKey}`;
        // this.props.history.push(location);
    }
    private onKeyPressHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            this.fetchInvoker(e);
        }
        
    }
}
export default connect<MappedProps, DispatchProps, SearchBarProps>(makeMapStateToProps, mapDispatchToProps)(SearchBar);
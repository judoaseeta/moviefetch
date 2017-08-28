import * as React from 'react';
import MovieList from './MovieList';
import { SearchBarContainer, SearchBarInputContainer, SearchBarInput } from '../components/styled';
import SearchBarPanel from '../components/SearchBarPanel';
import { match, Route, withRouter } from 'react-router-dom';
import { State as SearchState } from '../state/reducers/searchReducer';
import * as H from 'history';
export type SearchBarProps = {
    isFetching: boolean;
    history: H.History,   
    match: match<any>;
    changeSearchStateActions: changeSearchStateActions
    changeStateActions: changeStateActions;
    currentY: number;
    maxY: number;
    searchState: SearchState;
    apiActions: apiActions;
};
class SearchBar extends React.PureComponent<SearchBarProps, {
    SearchBarKey: string;
} > {
    state = {
        SearchBarKey: ''
    };
    componentDidMount() {
        /*
        window.addEventListener('scroll', () => {
          this.props.changeStateActions
          .changeStatusBar(window.scrollY, (document.body.scrollHeight - window.innerHeight));
       });
       */
    }
    render() {
        return (
            <div>
                <SearchBarContainer>
                    <SearchBarPanel
                        changeSearchStateActions={this.props.changeSearchStateActions}
                        changeStateActions={this.props.changeStateActions}
                        currentSearchKey={this.props.searchState.currentSearchKey}
                        currentY={this.props.currentY}
                        history={this.props.history}
                        searchKeys={this.props.searchState.searchKeys}
                        match={this.props.match}
                    />
                    <SearchBarInputContainer>
                        <SearchBarInput 
                            onChange={this.onChangeHandler}  
                        />
                        <input
                            type="submit" 
                            value="Fetch"
                            onClick={this.onFetchHandler}
                        />
                    </SearchBarInputContainer>
                    <br />
                </SearchBarContainer>
                    <Route 
                        path={`${this.props.match.url}/items/:item`}
                        exact={true}
                        strict={true}
                        render={() => 
                        <MovieList
                            isFetching={this.props.isFetching}
                            history={this.props.history}
                            searchState={this.props.searchState}
                            requestMovieById={this.props.apiActions.requestMovieById}
                            requestMovieBySearch={this.props.apiActions.requestMovieBySearch}
                            requestSwitch={this.props.changeSearchStateActions.requestSwitch}
                        />} 
                    />
            </div>
        );
    }
    private onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            SearchBarKey: e.target.value.toLowerCase()
        });
    }
    private onFetchHandler = (e: React.FormEvent<HTMLInputElement>) => {
        this.props.apiActions.requestMovieBySearch(this.state.SearchBarKey);
        // change route via history.push is depreciated due to adapt react-router-redux. 
        // const location = `${this.props.match.url}/items/${this.state.SearchBarKey}`;
        // this.props.history.push(location);
    }
}
export default withRouter(SearchBar as React.ComponentType<any>);
import * as React from 'react';
import { RootState } from '../state/reducers';
import Components from './';
import Home from './Home';
import Modal from './Modal';
import { Route, Switch } from 'react-router-dom';
import SearchBar from '../containers/SearchBar';
import { AppContainer } from './styled';
const AppComponent: React.SFC<RootState & ActionList> = (props) => (
    <div>
        <Modal 
            isFetching={props.AppState.isFetching}
        />
        <Components.Navbar />
        <AppContainer>
            <Switch>
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
                            isFetching={props.AppState.isFetching}
                            searchState={props.SearchState}
                            apiActions={props.apiActions}
                        />}
                />
            </Switch>
        </AppContainer>
    </div>
);
export default AppComponent;
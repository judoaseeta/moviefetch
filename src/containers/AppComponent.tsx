// import components
import Home from '../components/Home';
import Modal from '../components/Modal';
import NavBar from '../components/NavBar';
import { AuthFormProps } from '../containers/AuthForm';
import { AppContainer } from '../components/styled';
// import ts.
import { SearchBarProps } from './SearchBar';
import { MergedProps } from './MovieDetail';
import { ConfirmProps } from '../components/Confirm';
// import redux-related.
import authActions from '../state/actions/authActions';
import changeStateAcctions from '../state/actions/changeStateActions';
import { RootState } from '../state/reducers';
import { State as AppState } from '../state/reducers/appStatus';
import { State as AuthState } from '../state/reducers/authReducer';
import { getAppState, getAuthState } from '../state/selectors/appComponent';
// import dependencies
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { match, Route, withRouter } from 'react-router-dom';
import * as H from 'history';
import AsyncComponent from '../utils/asyncComponent';
import Toast from './Toast';
// Asyncnously imported Component
const MovieDetail = 
withRouter(
    AsyncComponent<MergedProps>(() => import('../containers/MovieDetail')) as React.ComponentType<any>);
const SearchBar = 
withRouter(AsyncComponent<SearchBarProps>(() => import('../containers/SearchBar')) as React.ComponentType<any>);
const AuthForm = 
    AsyncComponent<AuthFormProps>(() => import('../containers/AuthForm')) as React.ComponentType<any>;
const Confirm = 
    AsyncComponent<ConfirmProps>(() => import('../components/Confirm'));

const makeMapStateToProps = () => {
    const appState = getAppState();
    const authState = getAuthState();
    const mapStateToProps = (state: RootState) => {
        return {
            AppState: appState(state),
            AuthState: authState(state)
        };
    };
    return mapStateToProps;
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
      authActions: bindActionCreators(authActions, dispatch),
      toastOff: bindActionCreators(changeStateAcctions.toastOff, dispatch)
    };
};
type mapStateToProps = {
    AppState: AppState
    AuthState: AuthState
};
type dispatchedProps = {
    authActions: authActions;
    toastOff: () => Action;
};
type AppProps = {
    AppState: AppState
    AuthState: AuthState
    match: match<string>
    history: H.History
    location: H.Location
    authActions: authActions;
    toastOff: () => Action;
};
class AppComponent extends React.PureComponent<AppProps, {}> {
    componentDidMount() {
        this.props.authActions.getCurrentUser();
    }
    render() {
        const { AppState, AuthState, authActions } = this.props;
        return (
            <div>
            <Toast 
                isToastOn={this.props.AppState.isToastOn}
                toastContent={this.props.AppState.toastContent}
                toastFrom={this.props.AppState.toastFrom}
                toastOff={this.props.toastOff}
            />
            <Modal 
                isFetching={AppState.isFetching}
            />
            <NavBar 
                isLoggedIn={AuthState.isLoggedIn}
                signOut={authActions.signOut}
            />
            <AppContainer>
                    <Route 
                        exact={true}
                        path="/"
                        render={() =>
                            <Home
                                getCurrentUser={authActions.getCurrentUser}
                                requestConfirm={authActions.confirmRequest} 
                                requestSignIn={authActions.signInRequest}
                                requestSignUp={authActions.signUpRequest}
                            />
                        }
                    />
                    <Route 
                        path="/search" 
                        component={SearchBar}
                    />
                    <Route 
                        path="/item/:id"
                        component={MovieDetail}
                    />
                    <Route 
                        path="/authentication/"
                        render={() =>
                            <AuthForm 
                                authActions={authActions}
                                isLoggedIn={AuthState.isLoggedIn}
                            />
                        }
                    />
                    <Route 
                        path="/confirm/"
                        render={() =>
                           <Confirm 
                            requestConfirm={authActions.confirmRequest}
                           />
                        }
                    />
            </AppContainer>
        </div>
        );
    }
}
const apps = 
connect<mapStateToProps, dispatchedProps, AppProps>
(makeMapStateToProps, mapDispatchToProps)(AppComponent) as React.ComponentType<any>;
export default withRouter(apps);
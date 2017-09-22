import actionTypes from '../actions/actionTypes';
import { take, call, fork, put } from 'redux-saga/effects';
import { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';
import changeStateActions from '../actions/changeStateActions';
import fetchActions from '../actions/fetchActions';
import { push } from 'react-router-redux';
import { batchActions } from 'redux-action-batcher';
import { conFirm, getCurrentUser, getUserToken , signIn, signUp } from '../../utils/authFunctions';
function* ConfirmRequest(username: string, code: string) {
    try {
        const result = yield call(conFirm, username, code);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
} 
function* getUser() {
    const currentUser: CognitoUser =  yield call(getCurrentUser);
    if (currentUser === null) {
       return;
    }
    const token = yield call(getUserToken, currentUser);
    yield put(fetchActions.signInSuccess(token, currentUser.getUsername()));
}
function* SignInRequest(username: string, password: string) {
    try {
        const result: { session: CognitoUserSession, user: CognitoUser } = yield call(signIn, username, password);
        yield put(batchActions(
            fetchActions.signInSuccess(result.session.getIdToken().getJwtToken(), result.user.getUsername()),
            push(`/`)
        ));
    } catch (e) {
        yield put(changeStateActions.toastOn(e.message , 'SignIn'));
    }
}
function* SignUpRequest(username: string, email: string, password: string) {
   try {
        const result = yield call(signUp, username, email, password);
        console.log(result);
   } catch (e) {
       console.log(e);
   }
}
function* SignOutRequest() {
    const currentUser: CognitoUser = yield call(getCurrentUser);
    if (currentUser === null) {
        return;
    }
    yield currentUser.signOut();
    yield put({type: actionTypes.AUTH.SIGN_OUT});
}
function* watchAuthFlow() {
    while (true) {
        yield take(actionTypes.AUTH.GET_CURRENT_USER);
        yield fork(getUser);
        yield take(actionTypes.AUTH.REQUEST_SIGN_OUT);
        yield fork(SignOutRequest);
    }
  }
function* watchConfirm() {
    const { username, code } = yield take(actionTypes.AUTH.REQUEST_CONFIRM);
    yield call( ConfirmRequest, username, code);
    
}
function* watchSignInRequest() {
    const {username, password} = yield take(actionTypes.AUTH.REQUEST_SIGN_IN);
    yield fork(SignInRequest, username, password);
}
function* watchSignUpRequest() {
    const { username, email, password} = yield take(actionTypes.AUTH.REQUEST_SIGN_UP);
    yield call(SignUpRequest, username, email, password );
}
export default {
    watchAuthFlow,
    watchConfirm,
    watchSignInRequest,
    watchSignUpRequest
};
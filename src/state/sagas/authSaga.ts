import actionTypes from '../actions/actionTypes';
import { take, call } from 'redux-saga/effects';
import { conFirm, signUp } from '../../utils/authFunctions';
function* ConfirmRequest(username: string, code: string) {
    try {
        const result = yield call(conFirm, username, code);
        console.log(result);
    } catch (e) {
        console.log(e);
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
function* watchConfirm() {
    const { username, code} = yield take(actionTypes.AUTH.REQUEST_CONFIRM);
    yield call( ConfirmRequest, username, code);
    
}
function* watchSignUpRequest() {
    const { username, email, password} = yield take(actionTypes.AUTH.REQUEST_SIGN_UP);
    yield call(SignUpRequest, username, email, password );
}
export default {
    watchConfirm,
    watchSignUpRequest
};
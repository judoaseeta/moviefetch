import actionTypes from './actionTypes';

const confirmRequest = (username: string, code: string) => {
    return {
        type: actionTypes.AUTH.REQUEST_CONFIRM,
        username: username,
        code: code
    };
};
const signUpRequest = (username: string, email: string, password: string) => {
    return {
        type: actionTypes.AUTH.REQUEST_SIGN_UP,
        username: username,
        email: email,
        password: password
    };
};
export default{
    confirmRequest,
    signUpRequest
};
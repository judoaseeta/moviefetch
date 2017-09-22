import actionTypes from './actionTypes';
const confirmRequest = (username: string, code: string) => {
    return {
        type: actionTypes.AUTH.REQUEST_CONFIRM,
        username: username,
        code: code
    };
};
const getCurrentUser = () => {
    return {
        type: actionTypes.AUTH.GET_CURRENT_USER
    };
};
const signOut = () => {
    return {
        type: actionTypes.AUTH.REQUEST_SIGN_OUT
    };
};
const signInRequest = (username: string, password: string) => {
    return {
        type: actionTypes.AUTH.REQUEST_SIGN_IN,
        username: username,
        password: password
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
    getCurrentUser,
    signInRequest,
    signOut,
    signUpRequest,
};
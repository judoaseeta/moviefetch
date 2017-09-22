import actionTypes from '../actions/actionTypes';
interface FetchedUser extends Action {
    identityToken: string;
    userName: string;
}
export type State = {
    identityToken: string;    
    isLoggedIn: boolean;
    userName: string;
};
const initialState: State = {
    identityToken: '',
    isLoggedIn: false,
    userName: ''
};
const authReducer = (state: State = initialState, action: FetchedUser) => {
    switch (action.type) {
        case actionTypes.AUTH.SIGN_IN_SUCCESS: 
            return {
                isLoggedIn: true,
                identityToken: action.identityToken,
                userName: action.userName
            };
        case actionTypes.AUTH.SIGN_OUT:
            return {
                identityToken: '',
                isLoggedIn: false,
                userName: ''
            };
        default: return state;
    }
};
export default authReducer;
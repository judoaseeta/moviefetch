import actionTypes from '../actions/actionTypes';
import { CognitoUser } from 'amazon-cognito-identity-js';
interface FetchedUser extends Action {
    currentUser: CognitoUser;
}
type State = {
    currentUser: CognitoUser | null;
};
const initialState: State = {
    currentUser: null
};
const authReducer = (state: State = initialState, action: FetchedUser) => {
    switch (action.type) {
        case actionTypes.AUTH.SIGN_IN_SUCCESS: 
            return {
                ...state,
                currentUser: action.currentUser
            };
        default: return state;
    }
};
export default authReducer;
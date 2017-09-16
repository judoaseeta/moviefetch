import { 
    AuthenticationDetails, 
    CognitoUser, 
    CognitoUserAttribute, 
    CognitoUserSession,
    CognitoUserPool, 
    ISignUpResult 
} from 'amazon-cognito-identity-js';
const POOL_DATA = {
    UserPoolId: 'ap-northeast-2_KXz4UHU0O',
    ClientId: '1e4gpomiph0qnuisep6m0phip2',
};
export const conFirm = (username: string, code: string) => {
    const userPool = new CognitoUserPool({
        UserPoolId: POOL_DATA.UserPoolId,
        ClientId: POOL_DATA.ClientId
    });
    const user = new CognitoUser({ Username: username, Pool: userPool });
    return new Promise((resolve, reject) => (
        user.confirmRegistration(code, true, (err: Error, result: any) => {
        if (err) {
            reject(err);
        }
        resolve(result);
        })
    ));
};
export const getCurrentUser = () => {
    const userPool = new CognitoUserPool({
    UserPoolId: POOL_DATA.UserPoolId,
    ClientId:   POOL_DATA.ClientId
    });
    return userPool.getCurrentUser();
};
export const getUserToken = (currentUser: CognitoUser) => {
    return new Promise((resolve, reject) => {
    currentUser.getSession(( err: Error, session: CognitoUserSession) => {
        if (err) {
            reject(err);
            return;
        }
        if (session.isValid()) {
            resolve(session.getIdToken().getJwtToken());
        } else {
            reject(new Error('token isn\'t valid'));
        }
        });
    });
};
export const signIn = (username: string , password: string) => {
    const userPool = new CognitoUserPool({
    UserPoolId: POOL_DATA.UserPoolId,
    ClientId: POOL_DATA.ClientId
    });
    const authenticationData = {
        Username: username,
        Password: password
    };
    const user = new CognitoUser({ Username: username, Pool: userPool });
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    return new Promise((resolve, reject) => (
        user.authenticateUser(authenticationDetails, {
        onSuccess: (result: CognitoUserSession) => 
        resolve({session: result, user}),
        onFailure: (err) => reject(err),
        })
    ));
};
export const signUp = (username: string, email: string, password: string) => {
    const userPool = new CognitoUserPool({
        UserPoolId: POOL_DATA.UserPoolId,
        ClientId: POOL_DATA.ClientId
    });
    const attributeEmail = new CognitoUserAttribute({ Name : 'email', Value : email });

    return new Promise((resolve, reject) => (
        userPool.signUp(username, password, [attributeEmail], [attributeEmail], (err, result: ISignUpResult) => {
        if (err) {
            reject(err);
        }
        resolve(result.user);
        })
    ));
};
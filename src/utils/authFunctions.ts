import { 
    AuthenticationDetails, 
    CognitoUser, 
    CognitoUserAttribute, 
    CognitoUserPool, 
    ISignUpResult 
} from 'amazon-cognito-identity-js';
const POOL_DATA = {
    UserPoolId: 'ap-northeast-2_zAdJpJ59u',
    ClientId: 'cfni2v5ge3ftjin4jps1to9ma',
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
export const Login = (username: string , password: string) => {
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
        onSuccess: (result) => resolve(result.getIdToken().getJwtToken()),
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
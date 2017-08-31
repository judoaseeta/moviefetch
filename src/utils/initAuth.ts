import { CognitoUserAttribute, CognitoUserPool, ISignUpResult } from 'amazon-cognito-identity-js';
const POOL_DATA = {
    UserPoolId: 'ap-northeast-2_zAdJpJ59u',
    ClientId: 'cfni2v5ge3ftjin4jps1to9ma',
};
const userPool = new CognitoUserPool(POOL_DATA);
export function signUp(username: string, email: string, password: string) {
    const user = {
        username: username,
        email: email,
        password: password
    };
    const attrList: CognitoUserAttribute[] = [];
    const emailAttribute = {
        Name: 'email',
        Value: user.email
    };
    attrList.push(new CognitoUserAttribute(emailAttribute));
    userPool.signUp(user.username, user.password, attrList, [], (err: Error, result: ISignUpResult) => {
        if (err) {
            return err;
        }
        return result;
    });
}
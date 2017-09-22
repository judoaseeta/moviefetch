import * as React from 'react';
import { HomeContainer } from './styled';
const Home: React.SFC<{
    getCurrentUser: () => Action;
    requestConfirm: (username: string, code: string) => RequestConfirm;
    requestSignIn: (username: string, password: string) => RequestSignIn;
    requestSignUp: (username: string, email: string, password: string) => RequestSignUp;
}> = (props) => (
    <HomeContainer>Home
        hi
    </HomeContainer>
);
export default Home;
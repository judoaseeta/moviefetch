import * as React from 'react';
import { HomeContainer } from './styled';
const Home: React.SFC<{
    getCurrentUser: () => Action;
    requestConfirm: (username: string, code: string) => RequestConfirm;
    requestSignIn: (username: string, password: string) => RequestSignIn;
    requestSignUp: (username: string, email: string, password: string) => RequestSignUp;
}> = (props) => (
    <HomeContainer>
        <h4>
        This is Roy's Portfolio app.
        </h4>
        <p>
            it's react-based SPA.
            You can see its source code from  
            <a href="https://github.com/judoaseeta/moviefetch">
                -  https://github.com/judoaseeta/moviefetch
            </a>
            <br />
            You can search movie you want to find and write your review about it.
        
        </p>
    </HomeContainer>
);
export default Home;
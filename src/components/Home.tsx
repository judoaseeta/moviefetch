import * as React from 'react';
import { HomeContainer } from './styled';
import AsyncComponent from '../utils/asyncComponent';
import { Props } from './Test';
const TestAsync =  AsyncComponent<Props>(() => import('./Test'));
const Home: React.SFC<{
}> = () => (
    <HomeContainer>Home
        <TestAsync
            tolga="G"
            message="hi"
            jotka="hi"
        />
    </HomeContainer>
);
export default Home;
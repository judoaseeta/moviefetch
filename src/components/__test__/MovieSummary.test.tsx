import * as React from 'react';
import MovieSummary, { MovieSummaryProps } from '../MovieSummary';
import { MovieSummaryContainer } from '../MovieSummary/styled';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<MovieSummary />', () => {
    let Component: ShallowWrapper<MovieSummaryProps, {}>;
    const mockedRequestMovieById = jest.fn();
    const mockedMovie = {
        Title: 'Find the nimo',
        Year: 1998,
        imdbID: '3322332d',
        Poster: '',
        Type: 'Movie'
    };
    beforeEach(() => {
        Component = shallow(
        <MovieSummary 
            Movie={mockedMovie}
            requestMovieById={mockedRequestMovieById}
        />
        );
    });
    it('should render movie summary container', () => {
        const container =  Component.find(MovieSummaryContainer);
        expect(container.exists()).toBe(true);
    });
    it('should render movie information', () => {
        const title =  Component.find('h4');
        expect(title.text()).toEqual(mockedMovie.Title);
    });
    it('should invoke requestMovieById when it clicked', () => {
        const container =  Component.find(MovieSummaryContainer);
        container.simulate('click');
        expect(mockedRequestMovieById.mock.calls[0][0]).toEqual(mockedMovie.imdbID);
    });
});

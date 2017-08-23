/*
import * as React from 'react';
import MovieSummary from '../MovieSummary';
import { mount, ReactWrapper } from 'enzyme';

describe('<MovieSummary />', () => {
    let Component: ReactWrapper<any, any>;
    const mockedMovie = {
        Title: 'Find the nimo',
        Year: 1998,
        imdbID: '3322332d',
        Poster: 'http://image',
        Type: 'Movie'
    };
    beforeEach(() => {
        Component = mount(<MovieSummary Movie={mockedMovie} />);
    });
    it('should be rendered', () => {
        expect(Component.exists()).toBe(true);
    });
    it('should render movie information', () => {
        const Title =  Component.find('h4').text();
        expect(Title).toEqual(mockedMovie.Title);
    });
});
*/
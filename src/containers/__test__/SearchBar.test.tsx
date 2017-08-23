/*
import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import SearchBar, { SearchBarProps } from '../SearchBar';
describe('<SearchBar />', () => {
    let Component: ReactWrapper<SearchBarProps, any>;
    const mockApi1 = jest.fn();
    const mockApi2 = jest.fn();
    const mockMovies = [
        {
            imdbID: 'EFEF',
            Title: 'Jurassic',
            Poster: 'fwefewwe',
            Type: 'Movie',
            Year: 1988
        },
        {
            imdbID: 'EFEF',
            Title: 'Jurassic2',
            Poster: 'fwefewwe',
           Type: 'Movie',
            Year: 1988
        }
    ];
    beforeEach(() => {
        Component = mount(
            <SearchBar
               currentPage={1}
               searchKey={'Jura'}
               Movies={mockMovies}
               requestMovieBySearch={mockApi2}
               requestMovieByQuery={mockApi1}
            />);
    });
    it('should rendered and has input', () => {
        let input = Component.find('input');
        expect(Component.exists()).toBe(true);
        expect(input.exists()).toBe(true);  
    });
    it('should invoke api call when input value is changed', () => {
        let input = Component.find('input').first();
        input.simulate('change', {
            target: {
                value: 'hi'
            }
        });
        expect(mockApi1.mock.calls[0][0]).toEqual('hi');
    });
});
*/
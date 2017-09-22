import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import MovieDetail, { MovieDetailProps } from '../MovieDetail';
import data from '../../state/reducers/__test__/movieReducer.data';
describe('<MovieDetail />', () => {
    let component: ShallowWrapper<MovieDetailProps, any>;
    beforeEach(() => {
        component = shallow(
            <MovieDetail 
                details={data}
                isRepliesOn={false}
            />
        );
    });
    it('should not render <div class=movieRepliesWrapper> when isRepliesOn === false', () => {
        const wrapper = component.find('div').first().hasClass('movieRepliesWrapper');
        expect(wrapper).toBe(false);
    });
    it('should render <div class=movieRepliesWrapper> when isRepliesOn === true', () => {
        component.setProps({ isRepliesOn: true });
        const wrapper = component.find('div').first().hasClass('movieRepliesWrapper');
        expect(wrapper).toBe(true);
    });
});
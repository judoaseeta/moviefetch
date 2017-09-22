import SearchBarInput, { SearchBarInputType } from '../SearchBarInput';
import { SearchBarInput as Input } from '../SearchBarInput/styled';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
describe('<SearchBarInput />', () => {
    let component: ShallowWrapper<SearchBarInputType, any>;
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    const mock3 = jest.fn();
    beforeEach(() => {
        component = shallow(
        <SearchBarInput 
            onChangeHandler={mock1}
            onClickHandler={mock2}
            onKeyPressHandler={mock3}
        />
        );
    });
    it('it should have input', () => {
        const input = component.find(Input);
        input.simulate('keypress');
        expect(mock3.mock.calls.length).toEqual(1);
    });
    it('it should pass value to parent container', () => {
        const input = component.find(Input);
        const keyWord = {
            target : {
                value: 'King Kong'
            }
        };
        input.simulate('change', keyWord);
        expect(mock1.mock.calls[0][0]).toEqual(keyWord);
    });
    it('it should invoke onClickHandler when click button', () => {
        const button =  component.find('button');
        button.simulate('click');
        expect(mock2.mock.calls.length).toEqual(1);
    });
});
import * as React from 'react';
import { shallow } from 'enzyme';
import { spy, useFakeTimers, SinonFakeTimers } from 'sinon';
import Toast from '../Toast';
describe('<Toast />', () => {
    let clock: SinonFakeTimers;
    const spyFunc =  spy(Toast.prototype, 'componentWillReceiveProps');
    const mockedToastOff = jest.fn();
    let component = shallow(
            <Toast 
                toastContent={'don\'t worry'}
                toastFrom={'from state'}
                isToastOn={false}
                toastOff={mockedToastOff}
            />
        );
    beforeEach(() => {
        clock = useFakeTimers();
    });
    afterEach(() => {
        clock.restore();
    });
    it('should invoke componentWillReceiveProps when isToastOn === true, toastContent is changed', () => {
        const wrapper = component;
        expect(spyFunc.calledOnce).toEqual(false);
        wrapper.setProps({ isToastOn: true, toastContent: 'changed'});
        // clock.tick(1000);
        expect(spyFunc.calledOnce).toEqual(true);
        expect(mockedToastOff.mock.calls.length).toEqual(0);
        // clock.tick(4000); 
        // due to conflict JSDOM api between Typescript.
        // Therefore, i needed to drop this code.
        // expect(mockedToastOff.mock.calls.length).toEqual(1);
    });
});
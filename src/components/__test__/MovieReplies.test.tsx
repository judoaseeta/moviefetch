import * as React from 'react';
import { shallow } from 'enzyme';
import { 
    DeletePanel, 
    Replies,
    MovieReply
} from '../MovieReplies';
// import { DeletePanelButtons } from '../MovieReplies/styled';
import data from '../../state/reducers/__test__/replyReducer.data';
/*
describe('<DeletePanel /> of <MovieReplies />', () => {
    const mockRequestDelete = jest.fn();
    const mockSwitcher = jest.fn();
    let component = shallow(
        <DeletePanel 
            requestDelete={mockRequestDelete}
            deleteSwitcher={mockSwitcher}
        />
    );
    it('it should invoke api-prop when span is clicked', () => {
        const DeletePanelSpans =  component.find(DeletePanelButtons).find('span');
        DeletePanelSpans.first().simulate('click');
        DeletePanelSpans.last().simulate('click');
        expect(mockRequestDelete.mock.calls.length).toEqual(1);
        expect(mockSwitcher.mock.calls.length).toEqual(1);
    });
});
*/
describe('<MovieReply />', () => {
    const mockDeleteSwitcher = jest.fn();
    it('should not display delete span when reply\'s userName !== authUserName', () => {
        let component = shallow(
            <MovieReply 
                rating={data[0].rating}
                createdAt={data[0].createdAt}
                content={data[0].content}
                userName={data[0].userName}
                deleteSwitcher={mockDeleteSwitcher}
                isUserWantToDelete={false}
                authUserName={'Michael'}
            />
        );
        const deleteSpan = component.find('span');
        expect(deleteSpan.length).toEqual(0);
    });    
    it(
        'should display delete span when reply\'s userName === authUserName', () => {
        let component = shallow(
            <MovieReply 
                rating={data[0].rating}
                createdAt={data[0].createdAt}
                content={data[0].content}
                userName={data[0].userName}
                deleteSwitcher={mockDeleteSwitcher}
                isUserWantToDelete={false}
                authUserName={'ROY'}
            />
        );
        const deleteSpan = component.find('span');
        expect(deleteSpan.length).toEqual(1);
        expect(deleteSpan.first().html()).toEqual('<span id="delete">X</span>');
    });
    it('should invoke deleteSwitcher when when click deletespan', () => {
        let component = shallow(
            <MovieReply 
                rating={data[0].rating}
                createdAt={data[0].createdAt}
                content={data[0].content}
                userName={data[0].userName}
                deleteSwitcher={mockDeleteSwitcher}
                isUserWantToDelete={false}
                authUserName={'ROY'}
            />
        );
        const deleteSpan = component.find('span').first();
        deleteSpan.simulate('click');
        expect(mockDeleteSwitcher.mock.calls.length).toEqual(1);
    });
    it('should render <DeletePanel /> when isUserWantToDelete === true', () => {
        let component = shallow(
            <MovieReply 
                rating={data[0].rating}
                createdAt={data[0].createdAt}
                content={data[0].content}
                userName={data[0].userName}
                deleteSwitcher={mockDeleteSwitcher}
                isUserWantToDelete={true}
                authUserName={'ROY'}
            />
        );
        const deletePanel = component.find(DeletePanel);
        expect(deletePanel.length).toEqual(1);
    });
});
describe('<Replies />', () => {
    const mockDeleteSwitcher = jest.fn();
    let component = shallow(
        <Replies 
            isUserWantToDelete={false}
            replies={data}
            userName={'roychoi'}
            deleteSwitcher={mockDeleteSwitcher}
        />
    );
    it('should render <Reply /> as many as replies.length', () => {
        const replies = component.find(MovieReply);
        expect(replies.length).toEqual(7);
    });
});
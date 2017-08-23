import * as React from 'react';
import { Dummy, ModalContainer } from './styled';
const Modal: React.SFC<{
    isFetching: boolean;
}> = (props) => (
    <ModalContainer
        className={props.isFetching ? 'active' : ''}
    >
    <Dummy>.</Dummy>
    </ModalContainer>
);
export default Modal;
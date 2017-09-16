import * as React from 'react';
import {ToastContainer as Container } from './styled';
const ToastComponent: React.SFC<{
    isToastOn: boolean;
    toastContent: string;
    toastFrom: string;
    toastOff: () => Action;
}> = (props) => (
    <Container
        className={`${props.isToastOn ? 'active' : ''}`}
    >
        <h4><span><h4 id="from">FROM:</h4></span>{props.toastFrom}</h4>
        <p><span id="message">Message:</span>{props.toastContent}</p>
        <button
            onClick={props.toastOff}
        >X
        </button>
    </Container>
);
export default ToastComponent;
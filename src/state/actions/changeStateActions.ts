import actionTypes from './actionTypes';

const toastOn = (content: string, from: string) => {
    return {
        type: actionTypes.CHANGESTATE.TOAST_ON,
        content: content,
        from: from
    };
};
const toastOff = () => {
    return {
        type: actionTypes.CHANGESTATE.TOAST_OFF
    };
};
export default {
    toastOn,
    toastOff
};
import actionTypes from './actionTypes';

const changeStatusBar = (currentY: number, maxY: number) => {
    return {
        type: actionTypes.CHANGESTATE.CHANGE_STATUS_BAR,
        currentY: currentY,
        maxY: maxY
    };
};
export default {
    changeStatusBar,
};
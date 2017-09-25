import * as React from 'react';
import ToastComponent from '../components/Toast';
export type ToastProps = {
    isToastOn: boolean;
    toastContent: string;
    toastFrom: string;
    toastOff: () => Action;
};
class Toast extends React.PureComponent<ToastProps, {}> {
    componentWillReceiveProps(nextProps: ToastProps) {
        const isToastChanged = this.props.toastContent !== nextProps.toastContent;
        const { toastOff } = this.props;
        if (isToastChanged) {
            setTimeout(() => { toastOff(); }, 4000);
        }
    }
    render() {
        return (
            <ToastComponent 
                toastContent={this.props.toastContent}
                toastFrom={this.props.toastFrom}
                isToastOn={this.props.isToastOn}
                toastOff={this.props.toastOff}
            />
        );
    }
}
export default Toast;
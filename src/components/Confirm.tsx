import * as React from 'react';
import { StyledForm } from './AuthForm/styled';
export type ConfirmProps = {
    requestConfirm: (username: string, code: string) => RequestConfirm;
};
class Confirm extends React.PureComponent<ConfirmProps, {}> {
    usernameRef: HTMLInputElement;
    codeRef: HTMLInputElement;
    render() {
        return (
            <StyledForm
                onSubmit={this.onSubmitHandler} 
            >
                <label htmlFor="username">UserName</label>
                <input 
                    name="username"
                    type="text"
                    ref={ref => this.usernameRef = ref as HTMLInputElement}
                />
                <label htmlFor="code">Code</label>
                <input 
                    type="text"
                    ref={ref => this.codeRef = ref as HTMLInputElement}
                />
                <input
                    name="code"
                    type="submit"
                    value="Submit"
                />
            </StyledForm>
        );
    }
    private onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.requestConfirm(this.usernameRef.value, this.codeRef.value);
    }
}
export default Confirm;
import * as React from 'react';

class Confirm extends React.PureComponent<{
    requestConfirm: (username: string, code: string) => RequestConfirm;
}, {}> {
    usernameRef: HTMLInputElement;
    codeRef: HTMLInputElement;
    render() {
        return (
            <form
                onSubmit={this.onSubmitHandler} 
            >
                <input 
                    type="text"
                    ref={ref => this.usernameRef = ref as HTMLInputElement}
                />
                <input 
                    type="text"
                    ref={ref => this.codeRef = ref as HTMLInputElement}
                />
                <input
                    
                    type="submit"
                    value="Submit"
                />
            </form>
        );
    }
    private onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.requestConfirm(this.usernameRef.value, this.codeRef.value);
    }
}
export default Confirm;
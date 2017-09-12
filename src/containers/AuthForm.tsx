import * as React from 'react';
import Form from '../components/AuthForm';
export type AuthFormProps = {
    authActions: authActions
    isLoggedIn: boolean;
};
type formState = {
    formState: number
    auth: {
        [key: string]: string
    }
};
class AuthForm extends React.PureComponent<AuthFormProps, 
formState> {
    state = {
        auth: {
            email: '',
            password: '',
            username: ''
        },
        formState: 0
    };
    render() {
        console.log(this.props);
        return (
                    <Form 
                        changeFormState={this.changeFormState}
                        formState={this.state.formState}
                        onChangeHandler={this.onChangeHandler}
                        onSubmitHandler={this.onSubmit}
                    />
        );
    }
    changeFormState = (value: number) => {
        this.setState({
            formState: value
        });
    }
    onChangeHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
        this.setState({
            auth : {
                ...this.state.auth,
                [e.currentTarget.name]: e.currentTarget.value
            }
        });
    }
    onSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        const { formState, auth } = this.state;
        if (formState === 0) {
            this.props.authActions.signInRequest(auth.username, auth.password);
        } else if (formState === 1) {
            this.props.authActions.signUpRequest(auth.username, auth.email, auth.password);
        }
    }
}
export default AuthForm;
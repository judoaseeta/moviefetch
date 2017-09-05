import * as React from 'react';
import { Container, StyledForm } from './styled';
const Form: React.SFC<{
    formState: number;
    changeFormState: (value: number) => void;
    onChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
}> = (props) => (
    <Container>
        {props.formState === 0
                    ?   <button onClick={(e) => props.changeFormState(1)}>Sign In</button>
                    :   <button onClick={(e) => props.changeFormState(0)}>Sign Up</button>
                }
        <StyledForm>
                {props.formState === 0
                    ?   <h4>Sign In</h4>
                    :   <h4>Sign Up</h4>
                }
                <label htmlFor="username">Username</label>
                <input 
                    name="username" 
                    type="text"
                    onChange={props.onChangeHandler}
                />
                {props.formState === 1
                    ? <input 
                        name="email"
                        type="email"
                        onChange={props.onChangeHandler}
                    />
                    : null
                    }
                <label htmlFor="password">Password</label>
                <input 
                    name="password"
                    type="password"
                    onChange={props.onChangeHandler}
                />
                {props.formState === 0
                    ?   <button>Sign In</button>
                    :   <button>Sign Up</button>
                }
        </StyledForm>
    </Container>
);
export default Form;
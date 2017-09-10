import * as React from 'react';
import { 
    Container, 
    ButtonHolderTop,
    SelectButton,
    StyledForm } from './styled';
const Form: React.SFC<{
    formState: number;
    changeFormState: (value: number) => void;
    onChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
}> = (props) => (
    <Container>
        <ButtonHolderTop>
                    <SelectButton
                            className={props.formState === 1 ? 'active' :  ''} 
                            onClick={(e) => props.changeFormState(1)}
                    >
                    Sign In
                    </SelectButton>
                    <SelectButton
                            className={props.formState === 0 ? 'active' :  ''}  
                            onClick={(e) => props.changeFormState(0)}
                    >Sign Up
                    </SelectButton>
        </ButtonHolderTop>
        <StyledForm>
                <label htmlFor="username">Username</label>
                <input 
                    name="username" 
                    type="text"
                    onChange={props.onChangeHandler}
                />
                {props.formState === 1
                    ? <label htmlFor="email">E-mail</label>
                    : null
                    }
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
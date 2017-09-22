import * as React from 'react';
const Button: React.SFC<{
    onClickHandler: (e: React.MouseEvent<HTMLButtonElement> | null ) => void;
}> = (props) => (
    <button 
        onClick={props.onClickHandler}
    >
        {props.children}
    </button>
);
export default Button;
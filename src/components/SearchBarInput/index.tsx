import * as React from 'react';
import { 
    SearchBarInputContainer, 
    SearchBarInput as Input 
} 
from './styled';
const SearchBarInput: React.SFC<{
    onChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
    onClickHandler: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
    onKeyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}> = (props) => (
    <SearchBarInputContainer>
        <Input 
            onChange={props.onChangeHandler}
            onKeyPress={props.onKeyPressHandler}
            placeholder="Type Keyword to find"  
        />
        <button 
            onClick={props.onClickHandler}
        >Fetch
        </button>
    </SearchBarInputContainer>
);
export default SearchBarInput;
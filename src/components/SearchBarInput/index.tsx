import * as React from 'react';
import { 
    SearchBarInputContainer, 
    SearchBarInput as Input 
} 
from './styled';
const SearchBarInput: React.SFC<{
    onChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
    onClickHandler: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}> = (props) => (
    <SearchBarInputContainer>
        <Input 
            onChange={props.onChangeHandler}
            placeholder="Type Keyword to find"  
        />
        <button 
            onClick={props.onClickHandler}
        >Fetch
        </button>
    </SearchBarInputContainer>
);
export default SearchBarInput;
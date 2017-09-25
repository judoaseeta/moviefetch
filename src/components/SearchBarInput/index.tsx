import * as React from 'react';
import { 
    SearchBarInputContainer, 
    SearchBarInput as Input 
} 
from './styled';
export type SearchBarInputType = {
    onChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
    onClickHandler: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
    onKeyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
const SearchBarInput: React.SFC<SearchBarInputType> = (props) => (
    <SearchBarInputContainer>
        <Input 
            onChange={props.onChangeHandler}
            onKeyPress={props.onKeyPressHandler}
            placeholder="Type Keyword to find"
            type="search"
            name="SearchBarKey"  
        />
        <button 
            onClick={props.onClickHandler}
        >Fetch
        </button>
    </SearchBarInputContainer>
);
export default SearchBarInput;
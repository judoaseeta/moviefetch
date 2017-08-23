import * as React from 'react';
import { SearchBarIcons as Container, SearchBarIcon } from './styled';
const SearchBarIcons: React.SFC<{
    changeSearchStateActions: changeSearchStateActions
}> = (props) => (
    <Container>
        <SearchBarIcon
            onClick={() => props.changeSearchStateActions.sortByAsc()}
        >
            <i className="fa fa-sort-numeric-desc" aria-hidden="true" />ASC
        </SearchBarIcon>
        <SearchBarIcon
            onClick={() => props.changeSearchStateActions.sortByDesc()}
        >
            <i className="fa fa-sort-numeric-asc" aria-hidden="true" />DESC
        </SearchBarIcon>
        <SearchBarIcon
            onClick={() => props.changeSearchStateActions.sortByNone()}
        >NONE
        </SearchBarIcon>
    </Container>
);
export default SearchBarIcons;
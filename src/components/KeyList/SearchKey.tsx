import * as React from 'react';
import { SearchKeyContainer as Container, KeyClose } from './styled';
import { match } from 'react-router-dom';
import * as H from 'history';
const SearchKey: React.SFC<{
    currentSearchKey: string;
    match: match<any>;
    value: string;
    history: H.History;
}> = (props) => (
    <Container
        className={props.currentSearchKey === props.value ? 'active' : ''}
    >
        <span
            onClick={(e) => props.history.push(`${props.match.url}/items/${props.value}`)}
        >{props.value}
        <KeyClose 
            className="fa fa-times" 
            aria-hidden="true"
        />
        </span>
    </Container>
);
export default SearchKey;
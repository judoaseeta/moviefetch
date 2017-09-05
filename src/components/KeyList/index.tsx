import * as React from 'react';
import { Dummy } from '../styled';
import { KeyListContainer as Container } from './styled';
import { match } from 'react-router-dom';
import SearchKey from './SearchKey';
import * as H from 'history';
const KeyList: React.SFC<{
    currentSearchKey: string;
    currentY: number;
    history: H.History;
    searchKeys: Set<string>;
    match: match<any>;
}> = (props) => (
    <Container>
        <i 
            className={props.currentY >= 250 ? 'fa fa-arrow-up' : ''} 
            aria-hidden="true" 
            onClick={(e) => window.scrollTo(0, 0)}
        />
        {props.searchKeys.size !== 0 
        ?  Array.from(props.searchKeys).map((value) => {
            return (   
                <SearchKey
                    currentSearchKey={props.currentSearchKey}
                    history={props.history}
                    value={value}
                    key={value}
                    match={props.match}
                />
            );
        })
        : <Dummy>.</Dummy>}
        <Dummy>/</Dummy>
    </Container>
);
export default KeyList;
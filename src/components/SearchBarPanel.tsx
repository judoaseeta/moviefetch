import * as React from 'react';
import { SearchBarPanelContainer as Container } from './styled';
import { match } from 'react-router-dom';
import SearchBarIcons from './SearchBarIcons';
import KeyList from './KeyList';
import * as H from 'history';
const SearchBarPanel: React.SFC<{
    changeSearchStateActions: changeSearchStateActions
    changeStateActions: changeStateActions
    currentSearchKey: string;
    currentY: number;
    history: H.History
    searchKeys: Set<string>
    match: match<any>;
}> = (props) => (
    <Container
        className={(props.searchKeys.size === 0 ? 'deactive' : '') || (props.currentY >= 260 ? 'fixed' : '')}
    >
        <KeyList 
            currentSearchKey={props.currentSearchKey}
            currentY={props.currentY}
            history={props.history}
            searchKeys={props.searchKeys}
            match={props.match}
        />
        <SearchBarIcons
            changeSearchStateActions={props.changeSearchStateActions}
        />
    </Container>
);
export default SearchBarPanel;
import * as React from 'react';
import { SearchBarPanelContainer as Container } from './styled';
import { match } from 'react-router-dom';
import SearchBarIcons from './SearchBarIcons';
import KeyList from './KeyList';
import * as H from 'history';
const SearchBarPanel: React.SFC<{
    changeSearchStateActions: changeSearchStateActions
    currentSearchKey: string;
    history: H.History
    isPanelOpen: boolean;
    searchKeys: Set<string>
    match: match<any>;
}> = (props) => (
    <Container
        className={(props.searchKeys.size === 0 ? 'deactive' : '') || (props.isPanelOpen ? 'fixed' : '')}
    >
        <KeyList 
            currentSearchKey={props.currentSearchKey}
            history={props.history}
            isPanelOpen={props.isPanelOpen}
            searchKeys={props.searchKeys}
            match={props.match}
        />
        <SearchBarIcons
            changeSearchStateActions={props.changeSearchStateActions}
        />
    </Container>
);
export default SearchBarPanel;
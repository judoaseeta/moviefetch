import * as React from 'react';
import { SearchBarPanelContainer as Container } from './styled';
import { match } from 'react-router-dom';
import * as H from 'history';
import Selector from '../utils/Selector';
const FindParams = (pathname: string) => {
    let lastIndexof = pathname.lastIndexOf('/');
    return pathname.slice(lastIndexof + 1, pathname.length);
};
const SortByYears = [ 'NONE-POPULAR', 'RECENT', 'OLD'];
const SearchBarPanel: React.SFC<{
    changeSearchStateActions: changeSearchStateActions
    currentSearchKey: string;
    history: H.History
    location: H.Location;
    isPanelOpen: boolean;
    searchKeys: Set<string>
    match: match<any>;
}> = (props) => (
    <Container
        className={props.isPanelOpen ? 'active' : ''}
    >
        <div>
            <span>Keywords you've found.</span>
            <Selector 
                defaultValue={FindParams(props.location.pathname)}
                onChangeFunction={(value) => props.history.push(`${props.match.url}/items/${value}`)}
                values={Array.from(props.searchKeys)}
            />
        </div>
        <div>
            <span>Retrieve current result.</span>
            <input />
        </div>
        <div>
            <span>Sort By Year - Movie Released.</span>
            <Selector
                values={SortByYears}
                onChangeFunction={(value: string) => props.changeSearchStateActions.sortByYear(value)}
            />
        </div> 
    </Container>
);
export default SearchBarPanel;
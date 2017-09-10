import styled from '../../utils/styledComponent';
export const KeyListContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    color: white;
`;
export const SearchKeyContainer =  styled.div`
    display: inline-block;
    border: 0.3px solid white;
    position: relative;
    padding-left: 9px;
    padding-right: 17px;
    padding-top: 1px;
    &.active {
        border: 0.3px solid red;
    }
`;  
export const KeyClose = styled.i`
    position: absolute;
    top: 0;
    right: 0;
`;  
import styled from '../../utils/styledComponent';
export const SearchBarIcons = styled.div`
    display: flex;
    width: 600px;
    flex-flow: row nowrap;
    justify-content: flex-end;
    &.deactive {
        display: none;
    }
`;
export const SearchBarIcon = styled.button`
    outline: none;
    border: none;
    background: linear-gradient(to bottom, #eee, #ddd);
    border-right: 0.1em white solid;
    width: 70px;
    font-size: 0.8em;
    &:last-child {
        border-right: none;
        margin-right: 10px;
    }
`;
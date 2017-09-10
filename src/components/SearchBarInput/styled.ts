import styled from '../../utils/styledComponent';
export const SearchBarInputContainer = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: center;
    align-items: baseline;
`;
export const SearchBarInput = styled.input`
    width: 600px;
    padding: 0.2em;
    outline: none;
    border: 1px solid #2980b9;
    font-size: 15px;
    @media (max-width: 600px) {
        width: 200px;
    }
    &:focus {
        box-shadow: 1px 1px 0.5px black;
    }
`;
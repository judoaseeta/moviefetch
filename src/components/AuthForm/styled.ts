import styled from '../../utils/styledComponent';
export const SelectButton = styled.button`
    background: white;
    color: #3498db;
    border: none;
    border-radius: 3%;
    font-size: 14px;
    outline: none;
    padding: 0.3em;
    margin-bottom: 0.1em;
    &.active {
        background: linear-gradient(to right, #3498db, #2980b9);
        color: white;
    } 
    &:hover {
        background: linear-gradient(to right, #3498db, #2980b9);
        color: white;
    }
`;
export const ButtonHolderTop = styled.div`
    border-bottom: 1px solid black;
    display: flex;
    justify-content: flex-start;
    @media(max-width:600px) {
        justify-content: center;
    }
`; 
export const Container = styled.div`
    border: 1px solid black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 400px;
    align-contents: flex-start;
`;
export const StyledForm = styled.form`
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    > input {
        padding: 0.3em;
    }
`;
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
    padding-left: 40px;
    outline: none;
    background-image: url('https://s3.ap-northeast-2.amazonaws.com/moviefetch/search-icon-png-11.png');
    background-repeat: no-repeat;
    background-position: 10px;
    background-size: 20px;
    border: none;
    border-bottom: 1px solid #2980b9;
    font-size: 15px;
    margin-bottom: 15px;
    transition: box-shadow 0.4s ease-in;
    @media (max-width: 600px) {
        width: 200px;
    }
    &:focus {
        box-shadow: 1px 1px 0.5px black;
    }
`;
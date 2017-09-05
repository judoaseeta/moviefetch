import styled from '../../utils/styledComponent';
export const MovieDetailContainer = styled.div`
display: grid;
padding: 0.3em;
grid-template-columns: 280px repeat(3, 1fr);
grid-template-rows: 1fr 1fr;
grid-gap: 0.4em;
border: 0.2px black solid;
border-top: none;
background-color: #bdc3c7;
> img {
    width: 280px;
    height: 410px;
}
> div {
    border: 0.1px white solid;  
    padding: 1.2em;
    background-color: #F2F1EF;
}
> p {
    display: inline-block;
}
`;
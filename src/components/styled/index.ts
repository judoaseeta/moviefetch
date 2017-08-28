import styled from '../../utils/styledComponent';
let imageurl = '../../img/bgimage.jpg';
export const MovieListContainer = styled.div`
    display: grid;
    padding: 0.3em;
    grid-gap: 0.3em;
    grid-template-columns: repeat(2, 1fr 1fr);
    justify-items: center;
    @media (max-width: 1100px) {
        grid-template-columns: 1fr 1fr 1fr
    }
    @media (max-width: 800px) {
        grid-template-columns: 1fr 1fr
    }
    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
    > div {
        padding: 0.3em;
    }
    > div:hover {
        border: 0.4px solid black;
    }
    > div:nth-child(even) {
        background: #eee;
    }
    > div:nth-child(odd) {
        background: #ddd;
    }
`;
export const MovieDetailContainer = styled.div`
    display: grid;
    padding: 0.3em;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: minmax(10px, 0.1fr) 1fr 1fr;
    grid-gap: 0.4em;
    border: 0.2px black solid;
    background-color: #bdc3c7;
    > img {
        width: 280px;
        height: 410px;
    }
    > div.Panel {
        grid-column: 1/5;
        background-color: #DADFE1;
        display: subgrid;
        justify-items: center;
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
export const MovieSummaryContainer = styled.div`
    display:flex;
    flex-flow: column wrap;
    > img {
        width: 280px;
        height: 410px;
    }
    > h4, p {
        word-wrap: break-word;
        word-break: keep-all;
    }
`;
export const AppContainer = styled.div`
    margin: 10px auto;
    padding-left: 10px;
    padding-right: 10px; 
    padding-bottom : 10px;
    display: flex;
    justify-content: center;
`;
export const HomeContainer = styled.div`
    background-image:url(${imageurl});
    background-size: cover;
    background-position: center;  
    height: 100vh;
`;
export const NavbarContainer = styled.header`
    display: flex;
    flex-flow: row nowrap;
    border-bottom: 1px solid black;
    height: 40px;
    justify-content: flex-start;
    background: linear-gradient(to right, #3498db, #2980b9);
    > nav {
        display: flex;
        justify-content: center;
        align-items: stretch;
        text-align: center;
    }
`;
export const SearchBarContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    margin-top: -8px;
`;
export const SearchBarControl = styled.div`
`;
export const SearchBarInputContainer = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: center;
    align-items: baseline;
`;
export const SearchBarInput = styled.input`
    width: 400px;
    padding: 0.3em;
    outline: none;
    @media (max-width: 600px) {
        width: 200px;
    }
`;
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
export const ModalLoading = styled.div`
`;
export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 0%; 
    height: 0%;
    &.active {
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.5;
    }
`;
export const Dummy = styled.span`
    display: none;
`;
export const SearchBarPanelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: space-around;
    width: 100%;
    background: linear-gradient(to right, black, grey);
    padding: 0.3em;
    &.fixed {
        position: fixed;
        top:0;
        left:0;
    }
    &.deactive {
        display: none;
    }
`;
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

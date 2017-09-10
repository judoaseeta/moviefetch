import styled from '../../utils/styledComponent';
let imageurl = '../../img/bgimage.jpg';
export const MovieListContainer = styled.section`
    display: grid;
    padding: 0.3em;
    grid-gap: 0.3em;
    grid-template-columns: repeat(5, 1fr);
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
export const MovieDetailOuterContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const MovieDetailPanel = styled.div`
    background-color: #DADFE1;
    display: flex;
    height: 30px;
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
export const SearchBarContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    margin-top: -8px;
`;
export const SearchBarControl = styled.div`
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
        height: 150%;
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

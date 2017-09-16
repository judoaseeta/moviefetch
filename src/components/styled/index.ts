import styled from '../../utils/styledComponent';
let imageurl = '../../img/bgimage.jpg';
export const MovieListContainer = styled.section`
    display: grid;
    padding: 0.3em;
    grid-gap: 0.3em;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    @media (max-width: 1100px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 820px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 650px) {
        grid-template-columns: repeat(2, 1fr);
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
    display: flex;
    flex-direction: column;
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
        z-index: 400;   
    }
`;
export const Dummy = styled.span`
    display: none;
`;
export const SearchBarPanelContainer = styled.div`
    display: none;
    font-size: 12px;
    &.active {
        align-items: start;
        border: 1px solid black;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 0.5em;
        z-index: 400;
        max-width: 500px;
        max-height: 200px;
        background-color: white;
        > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            > span {
                text-decoration: underline;
            }
        }
    }
`;
export const SearchPanelButtonHolder = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    &.fixed {
        position: fixed;
        top: 15px;
        left: 15px;
        z-index: 400;
    }
`;
export const SearchPanelButton = styled.button`
    max-width: 35px; 
   
`;
export const UpButton = styled.button`
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 400;
`;
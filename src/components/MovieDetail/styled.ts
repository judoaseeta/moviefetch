import styled from '../../utils/styledComponent';
export const MovieDetailContainer = styled.div`
    display: grid;
    padding: 0.3em;
    grid-template-columns: auto repeat(3, 1fr);
    grid-template-rows: auto 1fr;
    grid-gap: 0.4em;
    border: 0.2px black solid;
    border-top: none;
    background-color: #bdc3c7;
    position: relative;
    font-size: 12px;
    > div {
        border: 0.1px white solid;  
        padding: 1.2em;
        background-color: #F2F1EF;
    }
    > img {
        height: auto;
        border: 0.1px solid black;
        @media (max-width: 800px) {
            grid-column: 1 / 3;
            grid-row: 1;
            margin: 0 auto;
        }
    }
    @media (max-width: 800px) {
        grid-template-columns: 150px 1fr;
        grid-template-rows: auto repeat(3, 1fr);
        font-size: 10px;
    }
    .repliesListContainerOn {
        background-color: rgba(0,0,0,0.5);
        padding: 3em;
        display: flex;
        position: absolute;
        top: 0;
    }
    .repliesListContainerOff {
        display: none;
    }
`;
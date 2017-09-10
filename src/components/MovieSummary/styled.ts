import styled from '../../utils/styledComponent';
export const MovieSummaryContainer = styled.div`
display:flex;
flex-flow: column wrap;
> img {
    width: 230px;
    height: 360px;
    @media (max-width: 1100px) {
        width: 190px;
        height: 320px;
    }
    @media (max-width: 600px){
        width: 140px;
        height: 250px;
    }
}
> h4, p {
    word-wrap: break-word;
    word-break: keep-all;
    @media (max-width: 1100px) {
        font-size: 80%;
    }
    @media (max-width: 600px) {
        font-size: 60%;
    }
}
`;
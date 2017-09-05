import styled from '../../utils/styledComponent';
export const MovieSummaryContainer = styled.div`
display:flex;
flex-flow: column wrap;
> img {
    width: 230px;
    height: 360px;
}
> h4, p {
    word-wrap: break-word;
    word-break: keep-all;
}
`;
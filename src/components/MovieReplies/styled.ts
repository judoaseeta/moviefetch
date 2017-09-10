import styled from '../../utils/styledComponent';

export const MovieReply = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    border: 0.1px solid black;
    padding: 0.4em;
`;
export const MovieRepliesContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    background-color: white;
    border-radius: 0.5em;
    padding: 1em;
`;
export const MovieReplyForm = styled.form`
    background-color: white;
    border: 1px solid black;
    border-radius: 0.5em;
    display: flex;
    flex-direction: column;
    padding: 2em;   
    span {
        font-style: italic;
    }
    > textarea {
        padding: 1em;
        @media(max-width: 800px) {
            padding: 0.4em;
        }
        @media(max-width: 800px) {
            padding: 0.1em;
        }
    }
`;
export const RateBlock = styled.div`
    display: flex;
    flex-direction: row;
`;

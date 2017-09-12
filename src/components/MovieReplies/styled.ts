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
    position: relative;
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
    .nonAuthBlocker {
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        color: white;
        text-align: center;
        > h4 {
            font-size: 15px;
            font-style: italic;
        }
        a:visited {
            color: white;
        }
        &.active {
            background-color: rgba(0,0,0,0.8);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 100;
        }
    }
`;
export const RateBlock = styled.div`
    display: flex;
    flex-direction: row;
`;

import styled from '../../utils/styledComponent';
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    border-color: 0.1px white solid;
    padding: 3em;
    top: 0;
    z-index: 501;
    @media(max-width: 800px) {
        flex-direction: column;
        padding: 0.2em;
    }
`;
export const MovieReply = styled.div`
    display: flex;
    flex-direction: column;
    border: 0.1px solid black;
    border-bottom: none;
    padding: 0.2em;
    padding-bottom: none;
    min-width: 200px;
    max-width: 300px;
    &.userReview {
        border: 0.5px solid blue;
        margin-bottom: 6px;
        position: relative;
        .deletePanel {
            border: 0.1px red solid;
            background-color: black;
            color: white;
            position: absolute;
            z-index: 400;
            width: 120px;
            top: 20px;
            right: 3px;
        }
    }
    > div {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    &:last-child {
        border-bottom: 0.1px solid black;
    }
`;
export const Content = styled.div`
    background-color: #F2F1EF;
    border: 0.1px solid grey;
    padding: 0.2em;
    margin-top: 3px;
`;
export const MovieRepliesContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    background-color: white;
    border-radius: 0.5em;
    padding: 1em;
    max-height: 300px;
    overflow-y: scroll;
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
            max-width: 300px;
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
export const ReplyTopRight = styled.div`
    display: flex;
    justify-content: space-between;
    > span{
        border: 0.1px solid black;
        padding: 0.1em;
        width: 10px;
        height: 10px;
        text-align: center;
        cursor: pointer;
        margin-left: 3px;
    }
    > span:hover {
        background-color: black;
        color: white;
    }
`;
export const ReplyDate = styled.div`
    align-self: flex-end;
`;
export const RateBlock = styled.div`
    display: flex;
    flex-direction: row;
`;
export const DeletePanelContainer = styled.div`
    font-size: 11px;
    padding: 0.15em;
    text-align: center;
    > p {
        font-size: 13px;
        margin-top: 0;
    }
`;
export const DeletePanelButtons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 2px;
    > span {
        background-color: black;
        color: white;
        border: 0.1px solid white;
        cursor: pointer;
        padding: 0.2em;
        &.yes{
           &:hover {
               background-color: red;
               color: white;
           } 
        }
        &.no {
            &:hover {
                background-color: blue;
                color: white;
            }              
        }
    }
`;

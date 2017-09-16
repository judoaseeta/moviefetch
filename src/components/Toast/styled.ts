import styled from '../../utils/styledComponent';
export const ToastContainer = styled.div`
    display: none;
    color: white;
    background-color: black;
    border: 1px solid red;
    justify-content: space-around;
    align-items: center;
    max-height: 40px;
    position: relative;
    &.active {
        display: flex;
    }
    #from {
        font-style: italic;
        font-weight: bold;
        margin-right: 10px;
    }
    #message {
        font-style: italic;
        font-weight: bold;
        margin-right: 10px;
    }
    h4 {
        display: inline-block;
        font-size: 15px;
    }
    p {
        display: inline-block;
        font-size: 12px;
    }
    > button {
        color: white;
        cursor: pointer;
        border: 0.1px white solid;
        outline: none;
        position: absolute;
        top: 2px;
        right: 2px;
    }
`;
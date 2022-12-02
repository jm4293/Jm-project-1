import React from "react";
import styled from "styled-components";
import Chatting from "../component/Chatting";

const ChattingDiv = styled.div`
    width: 100%;
    height: 100%;
    // border: 1px solid black;
`;

function chatting() {
    return (
        <ChattingDiv>
            <Chatting/>
        </ChattingDiv>
    )
}

export default chatting;
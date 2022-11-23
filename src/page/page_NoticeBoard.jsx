import React from "react";
import styled from "styled-components";
import Noticeboard from "../component/component_NoticeBoard";

const NoticeboardDiv = styled.div`
    width: 100%;
    height: 100%;
`;

function noticeboard() {
    return (
        <NoticeboardDiv>
            <Noticeboard/>
        </NoticeboardDiv>
    )
}

export default noticeboard;
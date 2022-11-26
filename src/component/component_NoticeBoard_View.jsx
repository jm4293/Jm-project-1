import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const Frame = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
`;

function View() {
    const location = useLocation();
    console.log(location.state.test)

    const navigate = useNavigate();

    const onClickBackPage = () => {
        navigate(-1);
    }

    return (
        <Frame>
            <button onClick={onClickBackPage}>뒤로가기</button>
        </Frame>
    )
}

export default View;
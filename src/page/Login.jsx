import React from "react";
import styled from "styled-components";
import Login from "../component/Login";

const LoginDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function login() {
    return (
        <LoginDiv>
            <Login/>
        </LoginDiv>
    )
}

export default login;
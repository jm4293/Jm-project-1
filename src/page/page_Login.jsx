import React from "react";
import styled from "styled-components";
import Login from "../component/component_Login";

const HomeDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
`
const LoginDiv = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function home() {
    return (
        <HomeDiv>
            <LoginDiv>
                <Login />
            </LoginDiv>
        </HomeDiv>
    )
}

export default home;
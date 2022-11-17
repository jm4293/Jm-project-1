import React from "react";
import styled from "styled-components";

import Login from "../component/component_Login";
import Weather from '../component/component_Weather';

const HomeDiv = styled.div`
    width: 800px;
    height: 800px;
    display: flex;
    flex-wrap: wrap;
    // border: 1px solid red;
`;

const WeatherDiv = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;

`;

const LoginDiv = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    // transform: translateY( -20% );
    border: 1px solid red;
`;

function home() {
    return (
        <HomeDiv>
            <WeatherDiv>
                <Weather/>
            </WeatherDiv>
            <LoginDiv>
                <Login />
            </LoginDiv>
        </HomeDiv>
    )
}

export default home;
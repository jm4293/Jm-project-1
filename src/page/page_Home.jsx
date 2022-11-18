import React from "react";
import styled from "styled-components";

import Login from "../component/component_Home_Login";
import Weather from '../component/component_Home_Weather';

const HomeDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
`
const WeatherDiv = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
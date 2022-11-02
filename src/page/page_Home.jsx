import React from "react";
import styled from "styled-components";

import Login from "../component/component_Login";
import Weather from '../component/component_Weather';

function Home() {
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

export default Home;

const HomeDiv = styled.div`
    width: 800px;
    height: 800px;
    display: flex;
    flex-wrap: wrap;
`

const WeatherDiv = styled.div`
    // border: 1px solid red;
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginDiv = styled.div`
    // border: 1px solid blue;
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY( -60% );
`
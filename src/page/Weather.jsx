import React from "react";
import styled from "styled-components";
import Weather from '../component/Weather';

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

function weather() {
    return (
        <HomeDiv>
            <WeatherDiv>
                <Weather />
            </WeatherDiv>
        </HomeDiv>
    )
}

export default weather;
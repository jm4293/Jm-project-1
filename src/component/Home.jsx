import React from "react";
import styled from "styled-components";

function Home() {
    return (
        <Frame>
            <h1>jm4293</h1>
            <h3>이재민</h3>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export default Home;
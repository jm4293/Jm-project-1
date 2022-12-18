import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Home() {
    return (
        <Frame>
            <h1>jm4293</h1>
            <h3>이재민</h3>
        </Frame>
    )
}

export default Home;
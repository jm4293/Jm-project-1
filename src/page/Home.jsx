import React from "react";
import styled from "styled-components";

const HomeDiv = styled.div`
    width: 800px;
    max-height: 800px;
`

function Home() {
    return (
        <HomeDiv>홈화면 입니다</HomeDiv>
        // <div>홈화면</div>
    )
}

export default Home;
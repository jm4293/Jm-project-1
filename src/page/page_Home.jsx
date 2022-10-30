import React from "react";
import styled from "styled-components";

import Login from "../component/component_Login";

const HomeDiv = styled.div`
    width: 800px;
    height: 800px;
`

function Home() {
    return (
        <HomeDiv>
            <div>
                <Login />
            </div>
        </HomeDiv>
    )
}

export default Home;
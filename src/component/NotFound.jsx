import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  font-size: 50px;
  color: red;
  margin: auto;
`;

function NotFound() {
    return (
        <Frame> 없는 페이지 </Frame>
    )
}

export default NotFound;
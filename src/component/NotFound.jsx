import React from "react";
import styled from "styled-components";

function NotFound() {
    return (
        <Frame> 없는 페이지 </Frame>
    )
}

const Frame = styled.div`
  font-size: 50px;
  color: red;
  margin: auto;
`;

export default NotFound;
import React from "react";
import styled from "styled-components";

function NotFound() {
    return (
        <Frame> NOT FOUND PAGE </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: red;
`;

export default NotFound;
import React from "react";
import styled from "styled-components";

const NotFoundiv = styled.div`
    // width: 800px;
    // height: 800px;
    font-size: 50px;
    display : flex;
    justify-content : center;
    align-items : center;
`;

function notFound() {
    return (
        <NotFoundiv>
            없는 페이지
        </NotFoundiv>
    )
}

export default notFound;
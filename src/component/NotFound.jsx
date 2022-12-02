import React from "react";
import styled from "styled-components";

const NotFoundiv = styled.div`
    width: 100%;
    // height: 100%;
    font-size: 50px;
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function notFound() {
    return (
        <NotFoundiv>
            <div>
                없는 페이지
            </div>
        </NotFoundiv>
    )
}

export default notFound;
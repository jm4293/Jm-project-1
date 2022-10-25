import React from "react";
import styled from "styled-components";

const CalculatorDiv = styled.div`
    width: 800px;
    max-height: 800px;
`

function Calculator() {
    return(
        <CalculatorDiv>계산기</CalculatorDiv>
    )
}

export default Calculator;
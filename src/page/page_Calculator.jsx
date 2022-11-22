import React from "react";
import styled from "styled-components";
import Calculator from '../component/component_Calculator';

const CalculatorDiv = styled.div`
    width: 100%;
    // height: 100%;
    // border: 1px solid black;
`

function calculator() {
    return (
        <CalculatorDiv>
            <div>
                <Calculator />
            </div>
        </CalculatorDiv>
    )
}

export default calculator;
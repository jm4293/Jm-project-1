import React from "react";
import styled from "styled-components";
import Calculator from '../component/component_Calculator';

const CalculatorDiv = styled.div`
    width: 100%;
    height: 100%;
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
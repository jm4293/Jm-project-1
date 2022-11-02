import React from "react";
import styled from "styled-components";

import Calculator from '../component/component_Calculator';

const CalculatorDiv = styled.div`
    width: 800px;
    height: 800px;
`

function Calculate() {
    return (
        <CalculatorDiv>
            <div>
                <Calculator/>
            </div>
        </CalculatorDiv>
    )
}

export default Calculate;
import React from "react";
import styled from "styled-components";
import Calculator from "../component/component_Calculator";

const CalendarDiv = styled.div`
    width: 800px;
    height: 800px;
`

function Calendar() {
    return (
        <CalendarDiv>
            <Calculator/>
        </CalendarDiv>
    )
}

export default Calendar;
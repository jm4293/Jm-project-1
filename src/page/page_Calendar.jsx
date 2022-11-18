import React from "react";
import styled from "styled-components";
import Calendar from "../component/component_Calendar";

const CalendarDiv = styled.div`
    width: 100%;
    height: 100%;
`

function calendar() {
    return (
        <CalendarDiv>
            <Calendar/>
        </CalendarDiv>
    )
}

export default calendar;
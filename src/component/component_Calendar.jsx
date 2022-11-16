import React from "react";
import styled from "styled-components";

const FrameDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    // margin-left: auto;
    // margin-right: auto;
    // border: 1px solid black;
`;

const HeaderDiv = styled.div`
    height: 40px;
    border: 2px solid green;


`;

const MonthDiv = styled.div`
    display: flex;
    // justify-content: center;
    // border 1px solid red;
    // width: 10%;
`;

const MonthListDiv = styled.div`
    border: 1px solid black;
    padding: 40px;
    // display: flex;
    // justify-content: center;
`;

function Calendar() {
    const day = [];
    const days = new Date();

    console.log(days)


    const month = ['일', '월', '화', '수', '목', '금', '토'];
    const monthList = month.map((e) => (<MonthListDiv>{e}</MonthListDiv>))

    return (
        <FrameDiv>
            <div style={{ displays: 'flex' }}>
                <HeaderDiv>
                    <div className="TodayMonth">

                    </div>
                    <div className="Button">
                        <div className="PrevButton">

                        </div>
                        <div className="NextButton">

                        </div>
                    </div>
                </HeaderDiv>
                <MonthDiv>{monthList}</MonthDiv>
            </div>
        </FrameDiv>
    )
}

export default Calendar;
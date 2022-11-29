import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {format, addMonths, subMonths, getMonth} from "date-fns";

const FrameDiv = styled.div`
    // width: 100%;
    // height: 100%;
    // border: 1px solid black;
`;

const HeaderDiv = styled.div`
    width: 700px;
    height: 30px;
`;

const MonthDiv = styled.div`
    width: 700px;
    height: 70px;
    display: flex;
`;

const MonthListDiv = styled.div`
    border: 1px solid black;
    width: calc(100%/7);
    // height: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DayDiv = styled.div`
    width: 700px;
    height: 700px;
    display: flex;
    flex-wrap: wrap;
`;

const DayListDiv = styled.div`
    width: calc(100%/7);
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Calendar() {
    const monthColumn = ['일', '월', '화', '수', '목', '금', '토'];
    const [current, setCurrent] = useState(new Date())

    function prevButton() {
        setCurrent(subMonths(current, 1));
    }

    function nextButton() {
        setCurrent(addMonths(current, 1));
    }

    const HeaderCell = () => {
        return <div style={{display: 'flex'}}>
            <div style={{width: '40%'}}>
                <div className="TodayMonth">
                    {format(current, 'yy년 MM월 dd일')}
                </div>
            </div>
            <div style={{width: '60%'}}>
                <div className="Button" style={{display: 'flex', justifyContent: 'right'}}>
                    <div className="PrevButton">
                        <button onClick={prevButton}>prev</button>
                    </div>
                    <div className="NextButton">
                        <button onClick={nextButton}>next</button>
                    </div>
                </div>
            </div>
        </div>
    }

    const MonthCell = () => {
        return monthColumn.map((element, index) => (<MonthListDiv key={index}>{element}</MonthListDiv>))
    }

    const DayCell = () => {
        const prevMonth = new Date(current.getFullYear(), current.getMonth(), 0);
        const nowMonth = new Date(current.getFullYear(), current.getMonth() + 1, 0);
        const days_temp = [];
        const days = [];

        for (let i = 0; i <= prevMonth.getDay(); i++) {
            days_temp.unshift(prevMonth.getDate() - i);
        }
        for (let i = 1; i <= nowMonth.getDate(); i++) {
            days_temp.push(i);
        }
        for (let i = 1; i <= 7 - (nowMonth.getDay() + 1); i++) {
            days_temp.push(i);
        }

        days_temp.map((element, index) => {
            days.push(<DayListDiv key={index}>{element}</DayListDiv>)
        })

        return days;
    }

    return (
        <FrameDiv>
                <HeaderDiv>
                    <HeaderCell/>
                </HeaderDiv>
                <MonthDiv>
                    <MonthCell/>
                </MonthDiv>
                <DayDiv>
                    <DayCell/>
                </DayDiv>
        </FrameDiv>
    )
}

export default Calendar;
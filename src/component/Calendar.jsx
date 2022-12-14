import React, { useState } from "react";
import styled from "styled-components";
import { addMonths, subMonths } from "date-fns";

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
        const date = new Date();
        const today = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`

        return (
            <div style={{ display: 'flex' }}>
                <div style={{ width: '40%' }}>
                    <div className="TodayMonth" style={{ fontWeight: 'bold', marginLeft: '5px' }}>
                        Today: {today}
                    </div>
                </div>
                <div style={{ width: '60%' }}>
                    <div className="Button" style={{ display: 'flex', justifyContent: 'right' }}>
                        <div className="PrevButton">
                            <button onClick={prevButton} style={{ fontWeight: 'bold', marginRight: '5px' }}>prev</button>
                        </div>
                        <div className="NextButton">
                            <button onClick={nextButton} style={{ fontWeight: 'bold', marginRight: '10px' }}>next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const MonthCell = () => {
        return monthColumn.map((element, index) => (<MonthList style={{ fontWeight: 'bold' }} key={index}>{element}</MonthList>))
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
            days.push(<DayList key={index}>{element}</DayList>)
        })

        return days;
    }

    return (
        <Frame>
            <div>
                <Header>
                    <HeaderCell />
                </Header>
                <Month>
                    <MonthCell />
                </Month>
                <Day>
                    <DayCell />
                </Day>
            </div>
        </Frame>
    )
}

const Frame = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = styled.div`
  width: 50vw;
  height: 5vh;
  padding: 5px 5px;
`;

const Month = styled.div`
  width: 50vw;
  height: 5vh;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
`;

const MonthList = styled.div`
  width: calc(100% / 7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Day = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-wrap: wrap;
`;

const DayList = styled.div`
  width: calc(100% / 7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Calendar;
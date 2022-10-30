import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const CalculatorDiv = styled.div`
    width: 800px;
    height: 800px;
`

const NumberButton = styled.button`
    background-color: #f2f3f5;
    border: none;
    font-size: 18px;
    border-radius: 35px;
    margin: 3px 3px;
`

const CalButtion = styled.button`
    background-color: #4b89dc;
    border: none;
    font-size: 18px;
    border-radius: 35px;
    margin: 3px 3px;
`

function Calculator() {
    const [numbers, setNumbers] = useState([]);
    const [tempNumbers, setTempNumbers] = useState([]);

    const [pointCheck, setPointCheck] = useState(true);
    const [zeroCheck, setZeroCheck] = useState(true);

    // 숫자 입력
    function inputNumber(e) {
        setNumbers((prev) => prev + e.target.value);
        setTempNumbers((prev) => prev + e.target.value);
        setZeroCheck(false);

        console.log(tempNumbers);
    }

    // 첫 입력 0 검사
    function zerocheck(e) {
        if (numbers.length === 0) {
            return;
        }

        setNumbers((prevNumbers) => prevNumbers + e.target.value);
    }

    // 소수점 입력
    function pointcheck(e) {
        if (numbers.length === 0) {
            return;
        }

        if (pointCheck) {
            setNumbers((prevNumbers) => prevNumbers + e.target.value);
            setPointCheck(false);
            setZeroCheck(false);
        }
    }

    // + - * / 계산
    function inputCal(e) {
        let temp = 0;

        
        switch (e.target.value) {
            case '+':
                // inputNumber(e);
                // setTempNumbers(tempNumbers + temp);
                temp = temp + Number(tempNumbers);
                break;
            case '-':
                inputNumber(e);
                setTempNumbers(tempNumbers - temp);
                break
            case '*':
                inputNumber(e);
                setTempNumbers(tempNumbers * temp);
                break
            case '/':
                inputNumber(e);
                setTempNumbers(tempNumbers / temp);
                break
            case '%':
                inputNumber(e);
                setTempNumbers(tempNumbers % temp);
                break
            case 'reverse':
                inputNumber(e);
                setTempNumbers(tempNumbers * (-1));
                break
            case '=':
                break
        }

        
        setTempNumbers(() => '');
        console.log(temp);
    }

    // numbers 초기화
    function inputClear() {
        setNumbers(() => '');
        setPointCheck(true);
        setZeroCheck(true);
    }

    return (
        <CalculatorDiv>
            <div className="container" style={{ width: 'auto', height: 'auto', position: 'absolute', left: '50%', top: '30%', border: '1px solid black' }}>
                {/* 화면 */}
                <div className="displayContainer" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <input type='text' defaultValue={numbers} />
                </div>
                <div>{zeroCheck && numbers.length === 0 ? (<div style={{ display: 'flex', justifyContent: 'center', fontSize: '15px', }}>숫자를 입력해주세요.</div>) : (<div style={{ display: 'flex', justifyContent: 'center', fontSize: '15px', }}>입력중</div>)}
                </div>

                {/* 버튼 */}
                <div className="buttonContainer" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', margin: '25px 5px' }}>
                    <NumberButton onClick={inputClear}>C</NumberButton>
                    <NumberButton value='()' onClick=''>()</NumberButton>
                    <NumberButton value='%' onClick={inputCal}>%</NumberButton>
                    <CalButtion value='/' onClick={inputCal}>/</CalButtion>
                    <NumberButton value={7} onClick={inputNumber}>7</NumberButton>
                    <NumberButton value={8} onClick={inputNumber}>8</NumberButton>
                    <NumberButton value={9} onClick={inputNumber}>9</NumberButton>
                    <CalButtion value='*' onClick={inputCal}>*</CalButtion>
                    <NumberButton value={4} onClick={inputNumber}>4</NumberButton>
                    <NumberButton value={5} onClick={inputNumber}>5</NumberButton>
                    <NumberButton value={6} onClick={inputNumber}>6</NumberButton>
                    <CalButtion value='-' onClick={inputCal}>-</CalButtion>
                    <NumberButton value={1} onClick={inputNumber}>1</NumberButton>
                    <NumberButton value={2} onClick={inputNumber}>2</NumberButton>
                    <NumberButton value={3} onClick={inputNumber}>3</NumberButton>
                    <CalButtion value='+' onClick={inputCal}>+</CalButtion>
                    <NumberButton value='reverse' onClick={inputCal}>+/-</NumberButton>
                    <NumberButton value={0} onClick={zerocheck}>0</NumberButton>
                    <NumberButton value='.' onClick={pointcheck}>.</NumberButton>
                    <CalButtion value='=' onClick={inputCal}>=</CalButtion>
                </div>
            </div>
        </CalculatorDiv>
    )
}

export default Calculator;
import React, {useEffect, useState} from "react";
import styled from "styled-components";

const FrameDiv = styled.div`
    width: 700px;
    height: 700px;
    position: absolute;
    left: 15%;
    top: 5%;
    border: 1px solid black;
`;

const DisplayDiv = styled.div`
    width: 80%;
    height: 80px;
    position: absolute;
    left: 10%;
    top: 3%
    // border: 1px solid black;
`;

const DisplayNumberDiv = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

const NumberDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 150px 5px;
`;

const NumberButton = styled.button`
    background-color: #f2f3f5;
    border: none;
    font-size: 18px; 
    border-radius: 35px;
    margin: 3px;
    padding: 10px
`;

const CalculationButton = styled.button`
    background-color: #4b89dc;
    border: none;
    font-size: 18px; 
    border-radius: 35px;
    margin: 3px;
    padding: 10px
`;

function Calculator() {
    const [prevNumber, setPrevNumber] = useState('0');
    const [nextNumber, setNextNumber] = useState('0');
    const [displayNumber, setDisplayNumber] = useState('0');
    const [calculator, setCalculator] = useState('');

    // useEffect(() => {
    //     setDisplayNumber(prevNumber);
    // }, [prevNumber])

    useEffect(() => {
        setPrevNumber(displayNumber);
    }, [displayNumber])

    // useEffect(() => {
    //     // calculator === '' ? setPrevNumber('0') : setPrevNumber()
    //     setPrevNumber('0');
    // }, [nextNumber])

    // 숫자 입력
    const inputNumber = (e) => {
        // prevNumber === '0' ? setPrevNumber(e.target.value.toString()) : setPrevNumber((prev) => prev + e.target.value)
        // prevNumber === '0' ? setPrevNumber(e.target.value.toString()) : setPrevNumber(e.target.value)

        displayNumber === '0' ? setDisplayNumber(e.target.value.toString()) : setDisplayNumber((prev) => prev + e.target.value);
    }

    // 소수점 입력
    const inputPoint = (e) => {

    }

    // + - * / 입력
    const inputCalculate = (e) => {
        setDisplayNumber((prev) => prev + e.target.value);

        calculator !== '' ? setPrevNumber(0) : setNextNumber(prevNumber);

        // if(calculator === ''){
        //     setNextNumber(prevNumber);
        // }

        setPrevNumber('0');
        // setNextNumber(prevNumber);
        setCalculator(e.target.value);
    }

    // 계산
    const result = (e) => {
        let resultNumber = 0;
        switch (calculator) {
            case '+':
                resultNumber = parseInt(prevNumber) + parseInt(nextNumber);
                // console.log(resultNumber)
                // setDisplayNumber(parseInt(prevNumber) + parseInt(nextNumber));
                break;
            case '-':
                // setDisplayNumber(parseInt(prevNumber) - parseInt(nextNumber));
                break
            case '*':
                // setDisplayNumber(parseInt(prevNumber) * parseInt(nextNumber));
                break
            case '/':
                // setDisplayNumber(parseInt(prevNumber) / parseInt(nextNumber));
                break
            case '%':
                // setDisplayNumber(parseInt(prevNumber) % parseInt(nextNumber));
                break
        }

        setDisplayNumber(resultNumber.toString());
        setNextNumber(resultNumber.toString());
        // setCalculator(e.target.value);
        // setPrevNumber('0');
        // setNextNumber(displayNumber);
    }

    const clear = () => {
        return setPrevNumber('0');
    }

    return (
        <FrameDiv>
            <div>
                <DisplayDiv>
                    <DisplayNumberDiv>{displayNumber}</DisplayNumberDiv>
                    {/* <div>입력값: {nextNumber}</div> */}
                </DisplayDiv>
                <NumberDiv>
                    <NumberButton onClick={clear} value={''}>()</NumberButton>
                    <NumberButton onClick={inputCalculate} value={'%'}>%</NumberButton>
                    <NumberButton onClick={clear}>C</NumberButton>
                    <CalculationButton onClick={inputCalculate} value={'/'}>/</CalculationButton>
                    <NumberButton onClick={inputNumber} value={7}>7</NumberButton>
                    <NumberButton onClick={inputNumber} value={8}>8</NumberButton>
                    <NumberButton onClick={inputNumber} value={9}>9</NumberButton>
                    <CalculationButton onClick={inputCalculate} value={'*'}>*</CalculationButton>
                    <NumberButton onClick={inputNumber} value={4}>4</NumberButton>
                    <NumberButton onClick={inputNumber} value={5}>5</NumberButton>
                    <NumberButton onClick={inputNumber} value={6}>6</NumberButton>
                    <CalculationButton onClick={inputCalculate} value={'-'}>-</CalculationButton>
                    <NumberButton onClick={inputNumber} value={1}>1</NumberButton>
                    <NumberButton onClick={inputNumber} value={2}>2</NumberButton>
                    <NumberButton onClick={inputNumber} value={3}>3</NumberButton>
                    <CalculationButton onClick={inputCalculate} value={'+'}>+</CalculationButton>
                    <NumberButton onClick={clear} value={''}>+/-</NumberButton>
                    <NumberButton onClick={inputNumber} value={0}>0</NumberButton>
                    <NumberButton onClick={clear} value={''}>.</NumberButton>
                    <CalculationButton onClick={result} value={'='}>=</CalculationButton>
                </NumberDiv>
                <div>prevNumber: {prevNumber}</div>
                <div>nextNumber: {nextNumber}</div>
                <div>displayNumber: {displayNumber}</div>
                <div>calculator: {calculator}</div>
            </div>
        </FrameDiv>
    )
}

export default Calculator;


// calculator 브랜치에서 수정
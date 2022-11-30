import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FrameDiv = styled.div`
    width: 100%;
    height: 100%;
`;

const DisplayDiv = styled.div`
    width: 80%;
    height: 100px;
    position: absolute;
    left: 15%;
    top: 3%
`

const DisplayNumberDiv = styled.div`
    width: 100%;
    height: 80%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

const ButtonDiv = styled.div`
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
    const [resultNumber, setResultNumber] = useState(0);
    const [calculator, setCalculator] = useState('');

    useEffect(() => {
        setPrevNumber('0');
    }, [nextNumber])

    useEffect(() => {
        setNextNumber(resultNumber.toString());
        setDisplayNumber(resultNumber.toString());
    }, [resultNumber])

    // 숫자 입력
    const inputNumber = (e) => {
        displayNumber === '0' ? setDisplayNumber(e.target.value.toString()) : setDisplayNumber((prev) => prev + e.target.value);
        prevNumber === '0' ? setPrevNumber(e.target.value.toString()) : setPrevNumber((prev) => prev + e.target.value);
    }

    // + - * / 입력
    const inputCalculate = (e) => {
        setDisplayNumber((prev) => prev + e.target.value);

        if (calculator === '') {
            setNextNumber(prevNumber);
        }

        setCalculator(e.target.value);
    }

    // 계산
    const result = (e) => {
        switch (calculator) {
            case '+':
                setResultNumber(parseInt(nextNumber) + parseInt(prevNumber));
                break;
            case '-':
                setResultNumber(parseInt(nextNumber) - parseInt(prevNumber));
                break
            case '*':
                setResultNumber(parseInt(nextNumber) * parseInt(prevNumber));
                break
            case '/':
                setResultNumber(parseInt(nextNumber) / parseInt(prevNumber));
                break
            case '%':
                break
        }
    }

    // 소수점 입력
    const inputPoint = (e) => {

    }

    // 초기화
    const clear = () => {
        setPrevNumber('0');
        setNextNumber('0');
        setDisplayNumber('0');
        setResultNumber(0);
        setCalculator('');
    }

    return (
        <FrameDiv>
            <div>
                <DisplayDiv>
                    <DisplayNumberDiv>{displayNumber}</DisplayNumberDiv>
                    
                </DisplayDiv>
                <ButtonDiv>
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
                </ButtonDiv>
                <div>prevNumber: {prevNumber}</div>
                <div>nextNumber: {nextNumber}</div>
                <div>resultNumber: {resultNumber}</div>
                <div>displayNumber: {displayNumber}</div>
                <div>calculator: {calculator}</div>
            </div>
        </FrameDiv>
    )
}

export default Calculator;
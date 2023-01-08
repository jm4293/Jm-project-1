import React, {useEffect, useState} from "react";
import styled from "styled-components";

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
    const result = () => {
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
        <Frame>
            <Display>
                <DisplayNumber>{displayNumber}</DisplayNumber>
            </Display>
            <Button>
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
            </Button>
        </Frame>
    )
}

const Frame = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Display = styled.div`
    width: 30%;
    margin-bottom: 15px;
`;

const DisplayNumber = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid black;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    font-size: 25px;
`;

const Button = styled.div`
    width: 30%;
    height: 30%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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

export default Calculator;
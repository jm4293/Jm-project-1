import React, { useState } from "react";
import styled from "styled-components";

const FrameDiv = styled.div`
    width: 600px;
    height: 600px;
    position: absolute;
    left: 23%;
    top: 10%;
    border: 1px solid black;
`;

const NumButton = styled.button`
    background-color: #f2f3f5;
    border: none;
    font-size: 18px; 
    border-radius: 35px;
    margin: 3px;
    padding: 10px
`;

const CalButton = styled.button`
    background-color: #4b89dc;
    border: none;
    font-size: 18px; 
    border-radius: 35px;
    margin: 3px;
    padding: 10px
`;

function Calculator() {
    const [numbers, setNumbers] = useState('');
    const [temp, setTemp] = useState('');

    // 입력
    function inputNumber(e) {
        setNumbers((prev) => prev + e)
        setTemp(numbers);
    }

    // 첫 입력 0 검사
    function inputZeroCheck(e) {

    }

    // 소수점 입력
    function inputPointCheck(e) {

    }

    // + - * / 계산
    function inputCalculate(e) {
        switch (e) {
            case '+':
                setNumbers((prev) => prev + '+')
                break;
            case '-':
                setNumbers((prev) => prev + '-')
                break
            case '*':
                setNumbers((prev) => prev + '*')
                break
            case '/':
                setNumbers((prev) => prev + '/')
                break
            case '%':
                setNumbers((prev) => prev + '%')
                break
            case '+/-':
                setNumbers((prev) => prev + '*(-1)')
                break
            case '=':
                setNumbers(window.eval(numbers))
                break
        }
    }

    return (
        <>
            <FrameDiv>

                {/*화면*/}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                    <div style={{ width: "90%", height: "80px", border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: "center", fontSize: '25px' }}>
                        {numbers}
                    </div>
                </div>

                {/* 버튼 */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', margin: '150px 5px' }}>
                    <NumButton onClick=''>()</NumButton>
                    <NumButton onClick={inputCalculate}>%</NumButton>
                    <NumButton onClick={() => setNumbers('')}>C</NumButton>
                    <CalButton onClick={() => inputCalculate('/')}>/</CalButton>
                    <NumButton onClick={() => inputNumber(7)}>7</NumButton>
                    <NumButton onClick={() => inputNumber(8)}>8</NumButton>
                    <NumButton onClick={() => inputNumber(9)}>9</NumButton>
                    <CalButton onClick={() => inputCalculate('*')}>*</CalButton>
                    <NumButton onClick={() => inputNumber(4)}>4</NumButton>
                    <NumButton onClick={() => inputNumber(5)}>5</NumButton>
                    <NumButton onClick={() => inputNumber(6)}>6</NumButton>
                    <CalButton onClick={() => inputCalculate('-')}>-</CalButton>
                    <NumButton onClick={() => inputNumber(1)}>1</NumButton>
                    <NumButton onClick={() => inputNumber(2)}>2</NumButton>
                    <NumButton onClick={() => inputNumber(3)}>3</NumButton>
                    <CalButton onClick={() => inputCalculate('+')}>+</CalButton>
                    <NumButton onClick={() => inputCalculate('+/-')}>+/-</NumButton>
                    <NumButton onClick={() => inputNumber(0)}>0</NumButton>
                    <NumButton onClick={inputPointCheck}>.</NumButton>
                    <CalButton onClick={() => inputCalculate('=')}>=</CalButton>
                </div>
            </FrameDiv>
        </>
    )
}

export default Calculator;

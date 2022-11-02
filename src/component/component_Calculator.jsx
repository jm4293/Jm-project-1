import React, {useState} from "react";
import styled from "styled-components";

const NumButton = styled.button`
    background-color: #f2f3f5;
    border: none;
    font-size: 18px;
    border-radius: 35px;
    margin: 3px 3px;
`

const CalButton = styled.button`
    background-color: #4b89dc;
    border: none;
    font-size: 18px; 
    border-radius: 35px;
    margin: 3px 3px;
`

function Calculator() {
    const [numbers, setNumbers] = useState('');
    const [temp, setTemp]  =useState('');

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
        <div>
            <div style={{
                width   : 'auto',
                height  : 'auto',
                position: 'absolute',
                left    : '50%',
                top     : '30%',
                border  : '1px solid black'
            }}>
                {/* 화면 */}
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                    <div style={{
                        width         : "150px",
                        height        : "22px",
                        border        : '1px solid black',
                        display       : 'flex',
                        justifyContent: 'center'
                    }}>{numbers}</div>
                </div>

                {/* 버튼 */}
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', margin: '25px 5px'}}>
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
            </div>
        </div>
    )
}

export default Calculator;
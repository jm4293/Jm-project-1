import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function Member() {
    const [emailUpdate, setEmailUpdate] = useState('');             // 입력되는 이메일
    const [passwordUpdate, setPasswordUpdate] = useState('');       // 입력되는 비밀번호

    const [emailRead, setEmailRead] = useState([]);
    const [passwordRead, setPasswordRead] = useState([]);

    // 로그인
    const Login = async () => {
        if (emailUpdate === '' || passwordUpdate === '') {
            alert('아이디를 입력해 주세요')
            return
        }

        await axios.post(
            "http://localhost:8000/Login",
            JSON.stringify({
                user: {
                    email: emailUpdate,
                    password: passwordUpdate
                }
            }),
            {
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    email: emailUpdate,
                    password: passwordUpdate
                }
            }
        )
        .then((res) => {
            if(res.data === "로그인 성공"){
                alert("로그인 성공");
            }
            else {
                alert("로그인 실패");
            }
        })
        .catch(err => console.log(err))
    }

    // 회원가입
    const Register = async () => {
        if (emailUpdate === '' || passwordUpdate === '') {
            alert('아이디를 입력해 주세요')
            return
        }

        await axios.post(
            "http://localhost:8000/LoginRegister",
            JSON.stringify({
                user: {
                    email: emailUpdate,
                    password: passwordUpdate
                }
            }),
            {
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    email: emailUpdate,
                    password: passwordUpdate
                }
            }
        )
        .then(res => {
            alert("가입완료! " + res.data.email)
        })
        .catch(err => console.log(err))
    }

    // 비밀번호 찾기
    const Search = async () => {
        await axios.get(
            "http://localhost:8000/LoginSearch",
            {
                params: {
                    email: emailUpdate,
                }
            }
        )
        .then((res) => {
            alert("비밀번호: " + res.data)
        })
        .catch(err => console.log(err))
    }

    return (
        <Frame>
            <Input>
                <div>이메일</div>
                <input type='text' onChange={(e) => setEmailUpdate(e.target.value)} placeholder='이메일' />
                <div style={{ marginTop: '15px' }}>비밀번호</div>
                <input type='text' onChange={(e) => setPasswordUpdate(e.target.value)} placeholder='비밀번호' />
            </Input>
            <Button>
                <button onClick={Login} style={{ marginTop: "20px", cursor: "pointer" }}>로그인</button>
                <button onClick={Register} style={{ marginTop: "5px", cursor: "pointer" }}>회원가입</button>
                <button onClick={Search} style={{ marginTop: "5px", cursor: "pointer" }}>비밀번호 찾기</button>
            </Button>
        </Frame>
    )
}

const Frame = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.div`

`;

const Button = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Member;
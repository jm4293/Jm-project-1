import React, {useState} from "react";
import styled from "styled-components";

function Login() {
    const [emailUpdate, setEmailUpdate] = useState('');
    const [passwordUpdate, setPasswordUpdate] = useState('');

    const [emailRead, setEmailRead] = useState([]);
    const [passwordRead, setPasswordRead] = useState([]);

    const onChangeEmail = (e) => {
        setEmailUpdate(e.target.value);
    }

    const onChangePassword = (e) => {
        setPasswordUpdate(e.target.value);
    }

    // 회원가입
    // emailUpdate, passwordUpdate db에 저장
    const onClickButtonUpdate = () => {
        const post = {
            email: emailUpdate,
            password: passwordUpdate
        }

        fetch('http://localhost:3001/userInfoUpdate', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);  // #01 client에서 입력한 email, password을 server에서 받고 다시 client로 받기
            })
    }

    // 이메일, 비밀번호 찾기
    // emailUpdate, passwordUpdate db에서 불러오기
    const onClickButtonRead = () => {
        fetch('http://localhost:3001/userInfoRead', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify()
        })
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                console.log(json);  // #02
                // setEmailRead([...emailRead, json[0].user_email]);

                json.map((content) => {
                    console.log(content.id);
                    console.log(content.password);
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <Frame>
            <Input>
                <div>이메일</div>
                <input type='text' onChange={onChangeEmail} value={emailUpdate} placeholder='example@gmail.com'/>
                <div style={{marginTop: '15px'}}>비밀번호</div>
                <input type='password' onChange={onChangePassword} value={passwordUpdate} placeholder='8자 이상'/>
            </Input>

            <Button>
                <button onClick={onClickButtonUpdate} style={{marginTop: "20px"}}>회원가입</button>
                <button onClick={onClickButtonRead} style={{marginTop: "5px"}}>이메일, 비밀번호 찾기</button>
            </Button>
            <div>{emailRead}</div>
            <div>{passwordRead}</div>
        </Frame>
    )
}

const Frame = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.div`

`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Login;
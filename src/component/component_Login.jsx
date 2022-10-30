import React, { useState } from "react";

function Login() {
    const [emailUpdate, setEmailUpdate] = useState('');
    const [passwordUpdate, setPasswordUpdate] = useState('');

    const [emailRead, setEmailRead] = useState([]);
    const [passwordRead, setPasswordRead] = useState([]);

    function handleEmail(e) {
        setEmailUpdate(e.target.value);
    }

    function handlePassword(e) {
        setPasswordUpdate(e.target.value);
    }

    // 회원가입
    // emailUpdate, passwordUpdate db에 저장
    function onClickButtonUpdate() {
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
    function onClickButtonRead() {
        fetch('http://localhost:3001/userInfoRead', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify()
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);  // #02

                json.map(content => {
                    return console.log(content.user_email);
                })
            })
    }

    return (
        <div style={{ width: 'auto', height: 'auto', position: 'absolute', left: '50%', top: '30%' }}>
            <div className='LoginPage' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/*로그인 입력*/}
                <div className='contentWrap'>
                    <div style={{ marginTop: "6px" }} className='inputTitle'>이메일</div>
                    <div className='inputWrap'>
                        <input
                            className='input'
                            type='text'
                            placeholder='example@gmail.com'
                            value={emailUpdate}
                            onChange={handleEmail}
                        />
                    </div>

                    <div style={{ marginTop: "6px" }} className='inputTitle'>비밀번호</div>
                    <div className='inputWrap'>
                        <input
                            className='input'
                            type='passwordUpdate'
                            placeholder='8자 이상'
                            value={passwordUpdate}
                            onChange={handlePassword}
                        />
                    </div>
                </div>

                {/* 로그인 버튼 */}
                <div >
                    <button onClick={onClickButtonUpdate}>회원가입</button>
                </div>

                {/* 유저 이메일 비밀번호 출력 */}
                <div>
                    <div>{emailRead}</div>
                    <div>{passwordRead}</div>
                    <button onClick={onClickButtonRead}>이메일, 비밀번호 찾기</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
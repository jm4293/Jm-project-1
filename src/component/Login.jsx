import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <div className='LoginPage'>
            {/*로그인 입력*/}
            <div className='contentWrap'>
                <div style={{ marginTop: "6px" }} className='inputTitle'>이메일</div>
                <div className='inputWrap'>
                    <input
                        className='input'
                        type='text'
                        placeholder='example@gmail.com'
                        value={email}
                        onChange={handleEmail}
                    />
                </div>

                <div style={{ marginTop: "6px" }} className='inputTitle'>비밀번호</div>
                <div className='inputWrap'>
                    <input
                        className='input'
                        type='password'
                        placeholder='8자 이상'
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
            </div>

            {/* 로그인 버튼 */}
            <div style={{ display: "flex", justifyContent: "right" }}>
                <button >로그인</button>
            </div>
        </div>
    )
}

export default Login;
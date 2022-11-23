import React, {useState} from "react";
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";

const Frame = styled.div`
    width: 100%;
    height: 100%;
`;

const HeaderDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    // border: 1px solid red;
`;

const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentDiv = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TailDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`;

function Write() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [writer, serWriter] = useState('');
    const navigate = useNavigate();

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeWriter = (e) => {
        serWriter(e.target.value);
    }

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onClickRegister = () => {
        const post = {
            title: title,
            writer: writer,
            content: content,
        }

        fetch('http://localhost:3003/register', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
            })
            .catch((err) =>{
                console.log(err);
            })
    }

    const onClickBackPage = () => {
        navigate(-1);
    }

    return (
        <Frame>
            <HeaderDiv>
                <div><h1>글쓰기</h1></div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <button onClick={onClickRegister}>등록</button>
                </div>
            </HeaderDiv>
            <TitleDiv>
                <textarea onChange={onChangeTitle} value={title} placeholder='제목' style={{width: '60%'}}></textarea>
                <textarea onChange={onChangeWriter} value={writer} placeholder='작성자' style={{width: '20%'}}></textarea>
            </TitleDiv>
            <ContentDiv>
                <textarea onChange={onChangeContent} value={content} placeholder='내용' style={{width: '80%', height: '300px'}}></textarea>
            </ContentDiv>
            <TailDiv>
                <button onClick={onClickBackPage}>뒤로가기</button>
            </TailDiv>
            <div>{title}</div>
            <div>{writer}</div>
            <div>{content}</div>
        </Frame>
    )
}

export default Write;
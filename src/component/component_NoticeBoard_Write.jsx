import React, {useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

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
    const [writer, setWriter] = useState('');
    // const [now, setNow] = useState('');
    const navigate = useNavigate();

    // useEffect(() => {
    //     const date = new Date()
    //     setNow(`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`);
    // }, [content])

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeWriter = (e) => {
        setWriter(e.target.value);
    }

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onClickRegister = () => {
        if (title === '' || content === '' || writer === '') {
            alert('빈칸을 입력하세요');
            return
        }

        const date = new Date();
        const now = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
        console.log(now)

        const post = {
            title: title,
            writer: writer,
            content: content,
            date: now,
        }

        fetch('http://localhost:3003/board/register', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .catch((err) => {
                console.log(err);
            })

        setTitle('');
        setContent('');
        setWriter('');
        alert('등록완료');
    }

    const onClickBackPage = () => {
        navigate(-1);
    }

    return (
        <Frame>
            <HeaderDiv>
                <div style={{marginLeft: '5px'}}>
                    <h1>글쓰기</h1>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <button onClick={onClickRegister} style={{marginRight: '5px'}}>등록</button>
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
                <button onClick={onClickBackPage} style={{margin: '10px 5px'}}>뒤로가기</button>
            </TailDiv>
        </Frame>
    )
}

export default Write;
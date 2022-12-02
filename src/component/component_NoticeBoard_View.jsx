import React from "react";
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";

const Frame = styled.div`
    width: 100%;
    height: 100%;
    // border: 1px solid blue;
`;

const Header = styled.div`
    margin: 10px 10px;
    // border: 1px solid black;
`;

const TitleDiv = styled.div`

`;

const WriterDiv = styled.div`
    margin-bottom: 5px;
`;

const DateDiv = styled.div`
    margin-bottom: 5px;
`;

const Content = styled.div`
    margin: 10px 10px;
`;

const ContentDiv = styled.div`
    width: 98%;
    height: 300px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px 5px;
`;

const Tail = styled.div`

`;

const CommentDiv = styled.div`
    width: 100%;
    height: 100px;
    padding-left: 5px;
    // border: 1px solid black;
`;

function View() {
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location.state)

    const onClickBackPage = () => {
        navigate(-1);
    }

    return (
        <Frame>
            <Header>
                <TitleDiv><h1>{location.state.title}</h1></TitleDiv>
                <div>
                    <WriterDiv>작성자: {location.state.writer}</WriterDiv>
                    <DateDiv>작성일: {location.state.date}</DateDiv>
                </div>
            </Header>
            <Content>
                <ContentDiv>{location.state.content}</ContentDiv>
            </Content>
            <Tail>
                <CommentDiv>
                    <div style={{display: 'flex'}}>
                        <h3>댓글</h3>
                        <div style={{border: '1px solid black', width:'90%', margin: '10px', padding: '5px'}}>123</div>
                    </div>
                </CommentDiv>
            </Tail>
            <div style={{marginRight: '10px', display: 'flex', justifyContent: 'right'}}>
                <button onClick={onClickBackPage} style={{marginTop: '5px'}}>뒤로가기</button>
            </div>
        </Frame>
    )
}

export default View;
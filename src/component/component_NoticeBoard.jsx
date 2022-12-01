import React, {useState} from "react";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Frame = styled.div`
    width: 100%;
    height: 100%;
`;

const HeaderDiv = styled.div`
    width: 100%;
`;

const ContentDiv = styled.div`
    width: 100%;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const Th = styled.th`
    border: 1px solid black;
`;

const Td = styled.td`
    border: 1px solid black;
`;

const TailDiv = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
`;

function Noticeboard() {
    const [board, setBoard] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3003/board', {
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
                setBoard(json);
                setCount(Object.keys(json).length);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const navigate = useNavigate();

    const move_view = (e) => {
        navigate('/noticeboard/view', {state: {test: e.target.innerText}});
    }

    const move_write = () => {
        navigate('/noticeboard/write');
    }

    const body_row = () => {
        return (
            board.map((item, index) => {
                return (
                    <tr>
                        <Td>
                            <div>{index}</div>
                        </Td>
                        <Td>
                            <div onClick={move_view}>{item.title}</div>
                        </Td>
                        <Td>
                            <div>{item.writer}</div>
                        </Td>
                        <Td>
                            <div>{item.date}</div>
                        </Td>
                    </tr>
                )
            })
        )
    }

    return (
        <Frame>
            <HeaderDiv>
                <div style={{padding: '5px 5px'}}>
                    <h1>전체글 보기</h1>
                </div>
                <div style={{padding: '5px 5px'}}>
                    {`${count} 개의 글`}
                </div>
            </HeaderDiv>
            <ContentDiv>
                <div style={{width: '98%', height: '100%', padding: '5px 5px'}}>
                    <Table>
                        <thead>
                        <tr>
                            <Th style={{width: '6%'}}>index</Th>
                            <Th style={{width: '50%'}}>제목</Th>
                            <Th style={{width: '10%'}}>작성자</Th>
                            <Th style={{width: '24%'}}>작성일</Th>
                            {/*<Th>조회</Th>*/}
                        </tr>
                        </thead>
                        <tbody>
                            {body_row()}
                        </tbody>
                    </Table>
                </div>
            </ContentDiv>
            <TailDiv>
                <button onClick={move_write} style={{marginRight: '5px'}}>글쓰기</button>
            </TailDiv>
        </Frame>
    )
}

export default Noticeboard;
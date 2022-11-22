import { id } from "date-fns/locale";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Frame = styled.div`
    width: 100%;
    height: 100%;
    // border: 1px solid black;
`;

const HeaderDiv = styled.div`
    witdth: 100%;
    height: 15%;
    // border: 1px solid red;
`;

const ContentDiv = styled.div`
    witdth: 100%;
    height: 85%;
    // border: 1px solid blue;
`;

const TitleDiv = styled.div`

`;

const AmountDiv = styled.div`

`;

const Table = styled.table`
    width: 100%;
    border: 1px solid blakc;
    border-collapse: collapse;
`;

const Th = styled.th`
    border: 1px solid black;
`;

const Td = styled.td`
    border: 1px solid black;
`;

function Noticeboard() {
    const [writer, setWriter] = useState('');
    const [title, setTtitle] = useState('');
    const [content, setContent] = useState('');
    const [amount, setAmount] = useState('0');

    const navigate = useNavigate();

    const write_move = () => {
        navigate('/noticeboard/write', {state: {id:'123', pw:'456'}});
    }

    const aaa = [
        {id:1, pw:'a'},
        {id:2, pw:'b'}
    ]

    return (
        <Frame>
            <HeaderDiv>
                <div>
                    <h1>전체글 보기</h1>
                </div>
                <div>
                    {`${amount} 개의 글`}
                </div>
            </HeaderDiv>
            <ContentDiv>
                <div style={{ width: '100%', height: '100%' }}>
                    <Table>
                        <thead>
                            <tr>
                                <Th>index</Th>
                                <Th>제목</Th>
                                <Th>작성자</Th>
                                <Th>작성일</Th>
                                <Th>조회</Th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <Td>1</Td>
                                <Td>1</Td>
                                <Td>1</Td>
                                <Td>1</Td>
                                <Td>1</Td>
                            </tr>
                            <tr>
                                <Td>2</Td>
                                <Td>2</Td>
                                <Td>2</Td>
                                <Td>2</Td>
                                <Td>2</Td>
                            </tr>
                            {aaa.map((e)=>{
                                return (<tr><Td>{e.id}</Td><Td>{e.pw}</Td></tr>)
                            })}

                        </tbody>
                    </Table>
                    <button onClick={write_move}>글쓰기</button>
                </div>

            </ContentDiv>
        </Frame>
    )
}

export default Noticeboard;
import { id } from "date-fns/locale";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Frame = styled.div`
    width: 100%;
    height: 100%;
    // border: 1px solid black;
`;

const HeaderDiv = styled.div`
    width: 100%;
    // height: 15%;
    // border: 1px solid red;
`;

const ContentDiv = styled.div`
    width: 100%;
    // height: 85%;
    // border: 1px solid blue;
`;

const Table = styled.table`
    width: 100%;
    border: 1px solid black;
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
    // const [title, setTitle] = useState([]);
    // const [writer, setWriter] = useState('');
    // const [date, setDate] = useState('');
    // const [content, setContent] = useState('');
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
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const navigate = useNavigate();

    const move_view = () => {
        navigate('/noticeboard/view')
    }

    const move_write = () => {
        // navigate('/noticeboard/write', {state: {id:'abc', pw:'123'}});
        navigate('/noticeboard/write');
    }

    // const bring_row = () => {
    //     return (
    //         <tr>
    //             <Td>1</Td>
    //             <Td onClick={move_view}>1</Td>
    //             <Td>1</Td>
    //             <Td>1</Td>
    //         </tr>
    //     )
    // }

    // const aaa = [
    //     {index:1, id:1, pw:'a'},
    //     {index:2, id:2, pw:'b'}
    // ]

    // console.log(board)
    // console.log(board[2])

    // for(let element in board[2]){
    //     console.log(`${element} // ${board[element]}`)
    // }

    // console.log(Object.keys(board))
    // console.log(Object.values(board))

    const test = () => {
        return (
            <div>
                {
                    board.map((item, index) => {
                        return <div>{item.writer}</div>
                    })
                }
            </div>
        )
    }

    return (
        <Frame>
            <HeaderDiv>
                <div>
                    <h1>전체글 보기</h1>
                </div>
                <div>
                    {`${count} 개의 글`}
                </div>
            </HeaderDiv>
            <ContentDiv>
                <div style={{ width: '100%', height: '100%' }}>
                    <Table>
                        <thead>
                            <tr>
                                <Th style={{ width: '10%' }}>index</Th>
                                <Th style={{ width: '60%' }}>제목</Th>
                                <Th style={{ width: '15%' }}>작성자</Th>
                                <Th style={{ width: '15%' }}>작성일</Th>
                                {/*<Th>조회</Th>*/}
                            </tr>
                        </thead>
                        <tbody >
                            {/* <tr>
                                <Td>1</Td>
                                <Td onClick={move_view}>1</Td>
                                <Td>1</Td>
                                <Td>1</Td>
                            </tr>
                            <tr>
                                <Td>2</Td>
                                <Td>2</Td>
                                <Td>2</Td>
                                <Td>2</Td>
                            </tr> */}
                            {/* {bring_row()} */}
                        </tbody>
                    </Table>
                </div>
            </ContentDiv>
            <TailDiv>
                <button onClick={move_write}>글쓰기</button>
            </TailDiv>

            <div>{test()}</div>

        </Frame>
    )
}

export default Noticeboard;
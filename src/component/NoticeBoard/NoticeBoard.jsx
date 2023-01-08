import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

function Noticeboard() {
    const [board, setBoard] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:8002/board', {
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

    const move_view = (item) => {
        navigate('/noticeboard/view', {state: {title: item.title, writer: item.writer, content: item.content, date: item.date}});
    }

    const move_write = () => {
        navigate('/noticeboard/write');
    }

    const body_row = () => {
        return (
            board.map((item, index) => {
                return (
                    <tr key={index}>
                        <Td>
                            <div style={{textAlign: 'center'}}>{index}</div>
                        </Td>
                        <TdClick>
                            <div onClick={() => {
                                move_view(item)
                            }} style={{textAlign: 'center'}}>{item.title}</div>
                        </TdClick>
                        <Td>
                            <div style={{textAlign: 'center'}}>{item.writer}</div>
                        </Td>
                        <Td>
                            <div style={{textAlign: 'center'}}>{item.date}</div>
                        </Td>
                    </tr>
                )
            })
        )
    }

    return (
        <Frame>
            <Header>
                <div><h1>전체글 보기</h1></div>
                <div>{`${count} 개의 글`}</div>
            </Header>
            <Content>
                <Table>
                    <thead>
                    <Th style={{width: '8%'}}>index</Th>
                    <Th style={{width: '54%'}}>제목</Th>
                    <Th style={{width: '10%'}}>작성자</Th>
                    <Th style={{width: '28%'}}>작성일</Th>
                    </thead>
                    <tbody>{body_row()}</tbody>
                </Table>
            </Content>
            <Tail>
                <button onClick={move_write}>글쓰기</button>
            </Tail>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
  //border: 1px solid blue;
`;

const Header = styled.div`
  width: 100%;
  margin-left: 10px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  width: 98%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid black;
`;

const Td = styled.td`
  border: 1px solid black;
`;

const TdClick = styled.td`
  border: 1px solid black;

  &:hover {
    background-color: rgb(229, 229, 229);
  }
`;

const Tail = styled.div`
  margin: 20px 10px;
  display: flex;
  justify-content: flex-end;
`;

export default Noticeboard;
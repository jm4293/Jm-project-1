import React, { useState } from "react";
import styled from "styled-components";
import io from "socket.io-client";

// const socket = io.connect("http://localhost:3002", {
//     cors: { origin: "*" }
// });

const socket = io.connect("http://localhost:3002")

const Frame = styled.div`
    width: 100%;
    height: 100%;
    border-left: none;
    // display: flex;
    // flex-wrap: wrap;
`;

const MessageDiv = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
`;

const SendMessageDiv = styled.div`
    width: 350px;
`;

const ReceiveMessageDiv = styled.div`
    width: 350px;
    height: 100%;
    border-right: 1px solid black;
`;

const InputMessageDiv = styled.div`
    width: 700px;
    height: 100%;
    border-top: 1px solid black;
`;

function Chatting() {
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');
    const [sendMessageName, setSendMessageName] = useState([]);
    const [sendMessageMsg, setSendMessageMsg] = useState([]);
    const [receiveMessageName, setReceiveMessageName] = useState([]);
    const [receiveMessageMsg, setReceiveMessageMsg] = useState([]);

    // socket.on('connection', () => {
    //     console.log("연결성공");
    // })

    // socket.on('error', (error) => {
    //     console.log(`에러 발생: ${error}`);
    // })

    const sendMsg = (e) => {
        e.preventDefault();
        socket.emit("send message", {
            name: name,
            msg: msg,
        });
        setSendMessageName([...sendMessageName, name]);
        setSendMessageName(name);
        setSendMessageMsg(msg);
        setName('');
        setMsg('');

        socket.on("receive message", (item) => {
            setReceiveMessageName(item.name);
            setReceiveMessageMsg(item.msg);
        })
    }

    const inputName = (e) => {
        setName(e.target.value);
        // setSendMessageName(e.target.value);
    }

    const inputMsg = (e) => {
        setMsg(e.target.value);
        // setSendMessageMsg(e.target.value);
    }

    // console.log(sendMessageName)

    return (
        <Frame>
            <MessageDiv>
                <div>
                    <ReceiveMessageDiv>
                        <div style={{padding: '10px 10px'}}>
                            <div>받은 메세지</div>
                            <p>{`이름: ${receiveMessageName} - 보낸 메세지: ${receiveMessageMsg}`}</p>
                        </div>
                    </ReceiveMessageDiv>
                </div>
                <div>
                    <SendMessageDiv>
                        <div style={{padding: '10px 10px'}}>
                            <div>보낸 메세지</div>
                            <p>{`이름: ${sendMessageName} - 보낸 메세지: ${sendMessageMsg}`}</p>
                        </div>
                    </SendMessageDiv>
                </div>
            </MessageDiv>

            <div>
                <InputMessageDiv>
                    <form onSubmit={sendMsg} style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <input type='text' onChange={inputName} value={name} name='name' id='id' placeholder='아이디' style={{margin: '5px 5px', width: '150px'}} />
                            <input type='text' onChange={inputMsg} value={msg} name='msg' id='msg' placeholder='내용' style={{width: '300px'}}/>
                        </div>
                        <button type='submit' style={{margin: '5px 5px'}}>전송</button>
                    </form>
                </InputMessageDiv>
            </div>

        </Frame>
    )
}

export default Chatting;
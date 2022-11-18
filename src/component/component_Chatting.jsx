import React, {useState} from "react";
import styled from "styled-components";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3002");

const Frame = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
    // display: flex;
    // flex-wrap: wrap;
`;

const MessageDiv = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
`;

const SendMessageDiv = styled.div`
    width: 450px;
    height: 100%;
    border: 1px solid blue;

`;

const ReceiveMessageDiv = styled.div`
    width: 450px;
    height: 100%;

    border: 1px solid red;
`;

const InputMessageDiv = styled.div`
    width: 900px
    height: 100%;
    border: 1px solid green;
    
`;

function Chatting() {
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');
    const [sendMessageName, setSendMessageName] = useState([]);
    const [sendMessageMsg, setSendMessageMsg] = useState([]);
    const [receiveMessageName, setReceiveMessageName] = useState([]);
    const [receiveMessageMsg, setReceiveMessageMsg] = useState([]);

    const sendMsg = (e) => {
        e.preventDefault();
        socket.emit("send message", {
            name: name,
            msg: msg,
        });
        setName('');
        setMsg('');
    }

    const inputName = (e) => {
        setName(e.target.value);
        setSendMessageName(e.target.value);
    }

    const inputMsg = (e) => {
        setMsg(e.target.value);
        setSendMessageMsg(e.target.value);
    }

    return (
        <Frame>
            <MessageDiv>
                <div>
                    <ReceiveMessageDiv>
                        123
                    </ReceiveMessageDiv>
                </div>
                <div>
                    <SendMessageDiv>
                        <p>{`이름: ${sendMessageName} // 보낸 메세지: ${sendMessageMsg}`}</p>
                    </SendMessageDiv>
                </div>
            </MessageDiv>

            <div>
                <InputMessageDiv>
                    <form onSubmit={sendMsg}>
                        <div>
                            <input type='text' onChange={inputName} value={name} name='name' id='id' placeholder='아이디'/>
                            <input type='text' onChange={inputMsg} value={msg} name='msg' id='msg' placeholder='내용'/>
                        </div>
                        <button type='submit'>전송</button>
                    </form>
                </InputMessageDiv>
            </div>
        </Frame>
    )
}

export default Chatting;
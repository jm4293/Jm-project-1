import React, {useState} from "react";
import styled from "styled-components";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8001")

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

    return (
        <Frame>
            <Message>
                <ReceiveMessage>
                    <div style={{padding: '10px'}}>
                        <div>받은 내용</div>
                        <p>{`닉네임: ${receiveMessageName} / 받은 내용: ${receiveMessageMsg}`}</p>
                    </div>
                </ReceiveMessage>
                <SendMessage>
                    <div style={{padding: '10px'}}>
                        <div>보낸 내용</div>
                        <p>{`닉네임: ${sendMessageName} / 보낸 내용: ${sendMessageMsg}`}</p>
                    </div>
                </SendMessage>
            </Message>
            <InputMessage>
                <form onSubmit={sendMsg} style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{marginLeft: "20px"}}>
                        <input type='text' onChange={inputName} value={name} name='name' id='id' placeholder='아이디'/>
                        <input type='text' onChange={inputMsg} value={msg} name='msg' id='msg' placeholder='내용' style={{width: "400px", marginLeft: "5px"}}/>
                    </div>
                    <button type='submit' style={{marginRight: "20px"}}>전송</button>
                </form>
            </InputMessage>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
`;

const Message = styled.div`
  width: 100%;
  height: 92%;
  display: flex;
`;

const SendMessage = styled.div`
  width: 50%;
`;

const ReceiveMessage = styled.div`
  width: 50%;
  border-right: 1px solid black;
`;

const InputMessage = styled.div`
  width: 100%;
  height: 8%;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Chatting;
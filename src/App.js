import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Calculator from "./component/Calculator";
import Calendar from "./component/Calendar";
import Chatting from "./component/Chatting";
import Weather from "./component/Weather";
import Noticeboard from "./component/NoticeBoard";
import NoticeBoard_Write from "./component/NoticeBoard_Write";
import NoticeBoard_View from "./component/NoticeBoard_View";
import NotFound from './component/NotFound';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";

const Frame = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 70%;
  height: 90%;
  border: 1px solid black;
  border-radius: 10px;

`

function App() {
    return (
        <BrowserRouter>
                <Frame>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/calculator' element={<Calculator/>}/>
                        <Route path='/calendar' element={<Calendar/>}/>
                        <Route path='/chatting' element={<Chatting/>}/>
                        <Route path='/weather' element={<Weather/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/noticeboard' element={<Noticeboard/>}/>
                        <Route path='/noticeboard/write' element={<NoticeBoard_Write/>}/>
                        <Route path='/noticeboard/view' element={<NoticeBoard_View/>}/>
                        <Route path='/*' element={<NotFound/>}/>
                    </Routes>
                </Frame>
        </BrowserRouter>
    );
}

export default App;
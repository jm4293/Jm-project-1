import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./page/Navbar";
import Login from "./page/Login";
import Calculator from "./page/Calculator";
import Calendar from "./page/Calendar";
import Chatting from "./page/Chatting";
import Weather from "./page/Weather";
import Noticeboard from "./page/NoticeBoard";
import NoticeBoard_Write from "./component/NoticeBoard_Write";
import NoticeBoard_View from "./component/NoticeBoard_View";
import NotFound from './component/NotFound';

import styled from "styled-components";

const RootDiv = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

const HeaderDiv = styled.div`
    display: flex;
    background-color: #eee;
    width: 800px;
    height: 800px;
    border-radius: 20px;
`

function App() {
    return (
        <RootDiv>
            <HeaderDiv>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/calculator' element={<Calculator/>}/>
                        <Route path='/calculator/1' element={<Chatting/>}/>
                        <Route path='/calendar' element={<Calendar/>}/>
                        <Route path='/chatting' element={<Chatting/>}/>
                        <Route path='/weather' element={<Weather/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/noticeboard' element={<Noticeboard/>}/>
                        <Route path='/noticeboard/write' element={<NoticeBoard_Write/>}/>
                        <Route path='/noticeboard/view' element={<NoticeBoard_View/>}/>
                        <Route path='/*' element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </HeaderDiv>
        </RootDiv>
    );
}

export default App;
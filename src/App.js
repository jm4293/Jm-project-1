import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./page/page_Navbar";
import Login from "./page/page_Login";
import Calculator from "./page/page_Calculator";
import Calendar from "./page/page_Calendar";
import Chatting from "./page/page_Chatting";
import Weather from "./page/page_Weather";
import Noticeboard from "./page/page_NoticeBoard";
import NoticeBoard_Write from "./component/component_NoticeBoard_Write";
import NoticeBoard_View from "./component/component_NoticeBoard_View";
import NotFound from './page/page_NotFound';

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
    // border: 1px solid blue;
`

function App() {
    return (
        <RootDiv>
            <HeaderDiv>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<Login/>}/>
                        <Route path='/calculator' element={<Calculator/>}/>
                        <Route path='/calculator/1' element={<Chatting/>}/>
                        <Route path='/calendar' element={<Calendar/>}/>
                        <Route path='/chatting' element={<Chatting/>}/>
                        <Route path='/weather' element={<Weather/>}/>
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
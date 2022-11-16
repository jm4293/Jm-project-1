import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './component/component_Navbar';
import Home from "./page/page_Home";
import Calculator from './page/page_Calculator'
import Calendar from "./page/page_Calendar";
import NotFound from './page/page_NotFound';

import styled from "styled-components";

const RootDiv = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // border: 1px solid red;
`

const HeaderDiv = styled.div`
    display: flex;
    background-color: #eee;
    // width: 800px;
    // height: 800px;
    // border: 1px solid blue;
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
                        <Route path='calendar' element={<Calendar/>}/>
                        <Route path='/*' element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </HeaderDiv>
        </RootDiv>
    );
}

export default App; 

// test11111
// test22222

// branch test01
// branch test00000000
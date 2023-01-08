import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Calculator from "./component/Calculator";
import Calendar from "./component/Calendar";
import Chatting from "./component/Chatting";
import Weather from "./component/Weather";
import Noticeboard from "./component/NoticeBoard/NoticeBoard";
import NoticeBoard_Write from "./component/NoticeBoard/NoticeBoard_Write";
import NoticeBoard_View from "./component/NoticeBoard/NoticeBoard_View";
import Intro from "./component/Introduce/Main";
import Introduce from "./component/Introduce/Introduce";
import FrontEnd from "./component/Introduce/Front";
import BackEnd from "./component/Introduce/Back";
import Etc from "./component/Introduce/Etc";
import NotFound from './component/NotFound';
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
    return (
        <Frame>
            <div style={{ width: "10%", height: "100%"}}>
                <Navbar />    
            </div>
            <div style={{ width: "90%", height: "100%"}}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/calculator' element={<Calculator />} />
                    <Route path='/calendar' element={<Calendar />} />
                    <Route path='/chatting' element={<Chatting />} />
                    <Route path='/weather' element={<Weather />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/noticeboard' element={<Noticeboard />} />
                    <Route path='/noticeboard/write' element={<NoticeBoard_Write />} />
                    <Route path='/noticeboard/view' element={<NoticeBoard_View />} />
                    <Route path='/intro' element={<Intro />} />
                    {/* <Route path='/intro/Introduce' element={<Introduce />} />
                        <Route path='/intro/FrontEnd' element={<FrontEnd />} />
                        <Route path='/intro/BackEnd' element={<BackEnd />} />
                        <Route path='/intro/Etc' element={<Etc />} /> */}
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </div>
        </Frame>
    );
}

const Frame = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 90%;
  height: 90vh;
  border: 1px solid black;
  border-radius: 10px;
`;

export default App;
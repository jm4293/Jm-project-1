import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './component/Header';
import Home from "./page/Home";
import NotFound from './page/NotFound';
import Calculator from './page/Calculator'
import Calendar from "./page/Calendar";
// import Login from "./component/Login";

function App() {
    return (
        <div className="root">
            {/* <div className='login'>
                <Login/>
            </div> */}
            <div className="header">
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/calculator' element={<Calculator/>}/>
                        <Route path='calendar' element={<Calendar/>}/>
                        <Route path='/*' element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;

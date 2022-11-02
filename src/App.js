import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './component/component_Header';
import Home from "./page/page_Home";
import NotFound from './page/page_NotFound';
import Calculator from './page/page_Calculator'
import Calendar from "./page/page_Calendar";

function App() {
    return (
        <div className="root">
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

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './component/Header';
import Home from "./page/Home";
import NotFound from './page/NotFound';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/*' element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

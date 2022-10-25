import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className='header-menu-container'>
            <div className='header-menu-wrap'>
                <div className='header-menu-list'>
                    <Link to='/'>
                        <img
                            style={{ width: "90px", height:"70px", margin:"20px 5px"}}
                            src='/images/logo.png'
                            alt='로고'
                        />
                    </Link>
                    <ul>
                        <li>
                            <Link to="/calculator">계산기</Link>
                        </li>
                        <li>
                            <Link to="/calendar" >달력</Link>

                        </li>
                        <li>
                            <Link to="/calander" />
                            하나
                        </li>
                        <li>
                            <Link to="/calander" />
                            둘
                        </li>
                        <li>
                            <Link to="/calander" />
                            셋
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
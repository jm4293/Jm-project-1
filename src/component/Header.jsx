import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className='header-menu-container'>
            <div className='header-menu-wrap'>
                <div className='header-menu-list'>
                    <Link to='.'>
                        <img
                            src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
                            alt='로고'
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
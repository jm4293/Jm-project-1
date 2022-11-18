import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const NavbarDiv = styled.div`
    border-right: 1px solid black;
    // border: 1px solid black;
    width: 100px;
    height: 100%;
`;

const Ul = styled.ul`
    list-style: none;
    padding-left: 0px;
`;

const Li = styled.li`
    margin-top: 20px;
    margin-left: 25px;
    font-weight: 600;
`;

function Navbar() {
    return (
        <NavbarDiv>
            <Link to='/'>
                <img
                    style={{width: "90px", height: "70px", margin: "20px 5px"}}
                    src='/images/logo.png'
                    alt='로고'
                />
            </Link>
            <Ul>
                <Li>
                    <Link to="/calculator">계산기</Link>
                </Li>
                <Li>
                    <Link to="/calendar">달력</Link>
                </Li>
                <Li>
                    <Link to="/chatting">채팅</Link>
                </Li>
                <Li>
                    <Link to="/two">둘</Link>
                </Li>
                <Li>
                    <Link to="/three">셋</Link>
                </Li>
            </Ul>
        </NavbarDiv>
    )
}

export default Navbar;
import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <Frame>
            <Link to='/'>
                <StyledImg src='/images/logo.png' alt='로고'/>
            </Link>
            <Ul>
                <Li>
                    <StyledLink to="/calculator">계산기</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/calendar">달력</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/weather">날씨</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/login">로그인</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/chatting">채팅</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/noticeboard">게시판</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="four">없는 페이지</StyledLink>
                </Li>
            </Ul>
        </Frame>
    )
}

const Frame = styled.div`
  border-right: 1px solid black;
  min-width: 120px;
  max-width: 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  border-radius: 10px;
  width: 80%;
  margin: 12px;
`;

const Ul = styled.ul`
  padding-left: 20px;
`;

const Li = styled.li`
  font-weight: bold;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: rgb(239, 239, 239);
  }
`;

export default Navbar;
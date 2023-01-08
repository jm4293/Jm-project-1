import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Frame>
            <Ul>
                <Li>
                    <StyledLink to="/">홈</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/weather">날씨</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/noticeboard">게시판</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/login">로그인</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/calculator">계산기</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/calendar">달력</StyledLink>
                </Li>

                <Li>
                    <StyledLink to="/chatting">채팅</StyledLink>
                </Li>
                {/* <Li>
                    <StyledLink to="/intro">이력서</StyledLink>
                </Li> */}
            </Ul>
        </Frame>
    )
}

const Frame = styled.div`
    width: 100%;
    height: 100%;
    border-right: 1px solid black;
`;

const Ul = styled.ul`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
`;

const Li = styled.li`
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
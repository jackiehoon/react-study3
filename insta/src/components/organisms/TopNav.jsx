import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

import {
  IconHome,
  IconDirect,
  IconNewPost,
  IconExplore,
  IconActivity,
} from "../../assets/images/icons";

const TopNav = () => {
  return (
    <>
      <Header>
        <Main>
          <Link to="/">
            <ImgLogo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          </Link>
          <SearchWrapper>
            <InputSearch placeholder="검색" />
          </SearchWrapper>
          <Nav>
            <IconWrapper>
              <IconHome />
            </IconWrapper>
            <IconWrapper>
              <IconDirect />
            </IconWrapper>
            <IconWrapper>
              <IconNewPost />
            </IconWrapper>
            <IconWrapper>
              <IconExplore />
            </IconWrapper>
            <IconWrapper>
              <IconActivity />
            </IconWrapper>
            <Link to="logout">logout</Link>
          </Nav>
        </Main>
      </Header>
      <Outlet />
    </>
  );
};

const Header = styled.header`
  background: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  border-bottom: 1px solid #dbdbdb;
`;
const Main = styled.main`
  height: 54px;
  max-width: 975px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ImgLogo = styled.img`
  width: 104px;
  vertical-align: bottom;
`;
const SearchWrapper = styled.div`
  background: #efefef;
  border-radius: 8px;
  height: 36px;
  min-width: 125px;
  width: 268px;
  display: flex;
  align-items: center;
  padding: 3px 16px;
  box-sizing: border-box;
`;
const InputSearch = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
`;
const Nav = styled.nav`
  display: flex;
`;
const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  & + & {
    margin-left: 22px;
  }
`;

export default TopNav;

import { Link } from "react-router-dom";
import styled from "styled-components";

const TopNav = () => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <LinkItem>메인</LinkItem>
        </Link>
        <Link to="/movie">
          <LinkItem>영화</LinkItem>
        </Link>
        <Link to="/book">
          <LinkItem>책</LinkItem>
        </Link>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
const LinkItem = styled.div`
  margin: 0 10px;
  padding: 10px;
`;

export default TopNav;

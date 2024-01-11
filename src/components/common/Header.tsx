import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header``;

const Nav = styled.nav``;

const Header = () => {
  return (
    <HeaderWrap>
      <div className="HeaderWrap__inner">
        <a href="">demo</a>
        <Nav>
          <ul className="nav__wrap">
            <li>
              <Link to={"/Login"}>ログイン</Link>
            </li>
            <li>
              <Link to={"/Favorites"}>お気に入り</Link>
            </li>
            <li>
              <Link to={"/Cart"}>カート</Link>
            </li>
          </ul>
        </Nav>
      </div>
    </HeaderWrap>
  );
};

export default Header;

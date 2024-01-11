import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import logo_favorite from "../../assets/logo_favorite.svg";
import logo_cart from "../../assets/logo_cart.svg";

const Header = () => {
  return (
    <HeaderWrap>
      <div className="inner">
        <a className="logo" href="">
          <img src={logo} alt="Y's" loading="lazy" sizes="auto" />
        </a>
        <Nav>
          <ul>
            <li>
              <Link to={"/Login"}>ログイン</Link>
            </li>
            <li>
              <Link to={"/Favorites"}>
                <img src={logo_favorite} alt="" loading="lazy" sizes="auto" />
              </Link>
            </li>
            <li>
              <Link to={"/Cart"}>
                <img src={logo_cart} alt="" loading="lazy" sizes="auto" />
              </Link>
            </li>
          </ul>
        </Nav>
      </div>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  position: relative;
  border-bottom: 1px solid #d7d7d7;

  & .inner {
    width: 80%;
    margin: 0 auto;
    padding: 1rem 0;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  & .logo {
    width: 4.8rem;
  }
`;

const Nav = styled.nav`
  position: relative;

  & ul {
    width: 100%;
    display: flex;
    align-items: center;

    & li {
      & a {
        padding: 1.5rem 1rem;
      }
    }
  }
`;

export default Header;

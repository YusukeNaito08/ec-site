import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import logo_favorite from "../../assets/logo_favorite.svg";
import logo_cart from "../../assets/logo_cart.svg";
import { useSelector } from "../../redux/store/store";
import { useDispatch } from "react-redux";
import { setUserLoggedOut } from "../../redux/users/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, userData } = useSelector((state) => state.user);

  console.log(userData);
  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUserLoggedOut());
    });
  };

  return (
    <HeaderWrap>
      <div className="inner">
        <Link className="logo" to={"/"}>
          <img src={logo} alt="Y's" loading="lazy" sizes="auto" />
        </Link>
        <Nav aria-label="グローバルナビゲーション">
          <ul>
            {isLoggedIn && userData ? (
              <li>
                <Link to={"/"} onClick={handleLogout}>
                  ログアウト
                  <span>/ {userData.firstName} </span>
                </Link>
              </li>
            ) : (
              <li>
                <Link to={"/Login"}>ログイン</Link>
              </li>
            )}
            <li>
              <Link to={"/Favorites"}>
                <img src={logo_favorite} alt="お気に入り" loading="lazy" sizes="auto" />
              </Link>
            </li>
            <li>
              <Link to={"/Cart"}>
                <img src={logo_cart} alt="カート" loading="lazy" sizes="auto" />
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

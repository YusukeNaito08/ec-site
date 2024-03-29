import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList/Index";
import ProductDetail from "./pages/ProductDetail/Index";
import Favorites from "./pages/Favorites/Favorites";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import OrderComplete from "./pages/OrderComplete/OrderComplete";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<ProductList />}
          />
          <Route
            path="/product/:productId"
            element={<ProductDetail />}
          />
          <Route
            path="/favorites/"
            element={<Favorites />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/checkout"
            element={<Checkout />}
          />
          <Route
            path="/complete"
            element={<OrderComplete />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="*"
            element={<Notfound />}
          />
        </Routes>
      </Router>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
    height: 100%;
    font-family: Roboto, arial, helvetica;
  }

  body {
    height: 100%;
  }

  #root {
    height: 100%;
  }

  a {
    display: block;
    color: unset;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: auto;
  }


  .inner {
    width: 85%;
    margin: 0 auto;
  }

`;

export default App;

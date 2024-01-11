import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Favorites from "./pages/Favorites/Favorites";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import OrderComplete from "./pages/OrderComplete/OrderComplete";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import Notfound from "./pages/Notfound";

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  a {
    display: block;
  }

  img {
    width: 100%;
    height: auto;
  }

`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/favorites/" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/complete" element={<OrderComplete />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

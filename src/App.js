// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import ProductList from "./pages/ProductList";
import NavbarComponent from "./components/NavbarComponent";
import PopUpWindow from "./components/PopUpWindow";
import SellerInput from "./components/SellerInput";
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [show, setShow] = useState(false);
  const [seller, setseller] = useState("Become a seller");
  const [sellerItem, setsellerItem] = useState([]);

  const handleLogin = () => {
    setUserLoggedIn(true);
  };

  const handleLogout = () => {
    setUserLoggedIn(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <CartProvider>
        <Router>
          <NavbarComponent
            userLoggedIn={userLoggedIn}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            setSelectedCategory={setSelectedCategory}
            show={show}
            setShow={setShow}
            seller={seller}
            setseller={setseller}
          />
          <Routes>
            <Route path="/" exact element={<Home sellerItem={sellerItem} />} />
            <Route
              path="/SellerInput"
              exact
              element={<SellerInput setsellerItem={setsellerItem} />}
            />
            <Route
              path="/productList/:category"
              element={<ProductList category={selectedCategory} />}
            />
            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
        {show && (
          <PopUpWindow
            show={show}
            handleClose={() => setShow(false)}
            setseller={setseller}
          />
        )}
      </CartProvider>
    </div>
  );
}

export default App;

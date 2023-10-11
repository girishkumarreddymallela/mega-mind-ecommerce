// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import './App.css';
import ProductList from './pages/ProductList';
import NavbarComponent from './components/NavbarComponent';


function App() {


  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

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
        <NavbarComponent userLoggedIn={userLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} handleCategoryChange={handleCategoryChange} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/productList/:category" element={<ProductList  category={selectedCategory}/>} /> 
            <Route path="/product/:id" element={<ProductDetail />} />
           
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </CartProvider>
     
    </div>
  );
}

export default App;

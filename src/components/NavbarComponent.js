// NavbarComponent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar,Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {  Link } from 'react-router-dom';

function NavbarComponent({ userLoggedIn, handleLogin, handleLogout, handleCategoryChange }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="navbar-container">
        <Navbar.Brand >E-commerce App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item   as={Link} to="/productList/electronics" onClick={() => handleCategoryChange('electronics')}>Electronics</NavDropdown.Item>
                  <NavDropdown.Item   as={Link} to="/productList/clothing" onClick={() => handleCategoryChange('men\'s clothing')}>Clothing</NavDropdown.Item>
                  <NavDropdown.Item    as={Link} to="/productList/jewelery" onClick={() => handleCategoryChange('jewelery')}>Jewelery</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
              </Nav> {/* ... rest of your Navbar code ... */}
      <Nav className="mx-auto">
        <Form inline className="search-form">
          <FormControl type="text" placeholder="Search for categories" className="mr-sm-2"  onChange={(e) => setSearchTerm(e.target.value)} />
          <Button variant="outline-light" onClick={() => { handleCategoryChange(searchTerm); navigate(`/productList/${searchTerm}`) }}>
                 <i className="fas fa-search"></i>
         </Button>

        </Form>
      </Nav>
      <Nav className="ml-auto">
                {userLoggedIn ? (
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                ) : (
                  <Nav.Link onClick={handleLogin}>Login</Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>{/* ... rest of your Navbar code ... */}
    </Navbar>
  );
}

export default NavbarComponent;

// NavbarComponent.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent({
  userLoggedIn,
  handleLogin,
  handleLogout,
  setSelectedCategory,
  show,
  setShow,
  seller,
  setseller,
}) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="navbar-container"
    >
      <Navbar.Brand>E-commerce App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item
              as={Link}
              to="/productList/electronics"
              onClick={() => setSelectedCategory("electronics")}
            >
              Electronics
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/productList/clothing"
              onClick={() => setSelectedCategory("men's clothing")}
            >
              Clothing
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/productList/jewelery"
              onClick={() => setSelectedCategory("jewelery")}
            >
              Jewelery
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/cart">
            Cart
          </Nav.Link>
          <Nav.Link as={Link} to="/checkout">
            Checkout
          </Nav.Link>
        </Nav>{" "}
        {/* ... rest of your Navbar code ... */}
        <Nav className="mx-auto">
          <Form inline className="search-form">
            <FormControl
              type="text"
              placeholder="Search for categories"
              className="mr-sm-2"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              variant="outline-light"
              onClick={() => {
                setSelectedCategory(searchTerm);
                navigate(`/productList/${searchTerm}`);
              }}
            >
              <i className="fas fa-search"></i>
            </Button>
          </Form>
        </Nav>
        <button
          style={{
            marginRight: "50px",
            backgroundColor: "orange", // green background
            color: "white", // white text
            padding: "5px 10px", // add some space around the text
            fontSize: "16px", // increase the font size
            border: "none", // remove the border
            borderRadius: "4px", // round the corners
          }}
          onClick={() => {
            if (seller === "seller place") {
              navigate("/SellerInput");
            } else {
              setShow(true);
            }
          }}
        >
          {seller}
        </button>
        <Nav className="ml-auto">
          {userLoggedIn ? (
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          ) : (
            <Nav.Link onClick={handleLogin}>Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
      {/* ... rest of your Navbar code ... */}
    </Navbar>
  );
}

export default NavbarComponent;

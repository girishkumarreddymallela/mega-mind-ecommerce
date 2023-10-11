// src/pages/Home.js

import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext'; // Import the CartContext

import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file
// ... (Dummy product data and card code)
export const products = [
  {
    id: 1,
    title: 'Product 1',
    price: 10.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Product 2',
    price: 19.99,
    description: 'Suspendisse auctor nisi, sit amet dignissim felis eleifend a.',
  },
  {
    id: 3,
    title: 'Product 3',
    price: 10.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 4,
    title: 'Product 4',
    price: 19.99,
    description: 'Suspendisse auctor nisi, sit amet dignissim felis eleifend a.',
  },
  {
    id: 5,
    title: 'Product 5',
    price: 10.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 6,
    title: 'Product 6',
    price: 19.99,
    description: 'Suspendisse auctor nisi, sit amet dignissim felis eleifend a.',
  },
  {
    id: 7,
    title: 'Product 7',
    price: 10.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 8,
    title: 'Product 8',
    price: 19.99,
    description: 'Suspendisse auctor nisi, sit amet dignissim felis eleifend a.',
  },
  // Add more dummy products here
];


function Home() {
  const { addToCart } = useContext(CartContext); // Get the addToCart function from the CartContext

  
  return (
    <Container>
      <h1>Welcome to Our Store</h1>
      
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className='product-card'>
              <Link to={`/product/${product.id}`}>
                {/* ... (Product card content) */}
                <Card.Img variant="top" src="https://via.placeholder.com/150" alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price.toFixed(2)}</Card.Text>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
              </Link>
              <Button variant="primary" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      
    </Container>
  );
        }
  export default Home;
  
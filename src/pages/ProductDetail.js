// src/pages/ProductDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './Home';

function ProductDetail() {
  // Get the product ID from the URL using useParams
  const { id } = useParams();

  // Find the product with the matching id
  const product = products.find((product) => product.id === Number(id));

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <h3>{product.title}</h3>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        {/* Add more product details here */}
      </div>
    </div>
  );
}

export default ProductDetail;

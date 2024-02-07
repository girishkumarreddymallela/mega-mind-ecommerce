// src/pages/ProductDetail.js

import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./Home";
import "./productDetails.css";
function ProductDetail() {
  // Get the product ID from the URL using useParams
  const { id } = useParams();

  // Find the product with the matching id
  const product = products.find((product) => product.id === Number(id));

  return (
    <div class="ccontainer">
      <h2 class="A0">Product Details</h2>
      <div class="A1">
        <h3 class="A2">{product.title}</h3>
        <p class="A3">${product.price.toFixed(2)}</p>
        <p class="A4">{product.description}</p>
        {/* Add more product details here */}
      </div>
    </div>
  );
}

export default ProductDetail;

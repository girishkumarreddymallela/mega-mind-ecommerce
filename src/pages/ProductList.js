// ProductList.js
import React, { useEffect, useState, useContext } from 'react';
import "./ProductList.css";
import { CartContext } from '../context/CartContext'; // Import the CartContext






function ProductList({ category }) {
  const { addToCart } = useContext(CartContext); // Get the addToCart function from the CartContext
  const [products, setProducts] = useState([]);
 


  useEffect(() => {
    // Fetch products based on the selected category
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [category]); // Re-fetch products whenever the category changes

  return (
    <div className="product-list">
      <h2>{category} Products</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4"> {/* Use Bootstrap responsive grid classes */}
        {products.map((product) => (
          <div key={product.id} className="col mb-4">
            <div className="card product-card h-70">
            
             <img src={product.image} className="card-img-top w-50 h-auto" alt={product.title} />
       
              <div className="card-body p-2"> {/* Reduced padding */}
                <h6 className="card-title mb-0">{product.title}</h6> {/* Smaller font */}
                <p className="card-text text-muted">$ {product.price.toFixed(2)}</p> {/* Smaller font and muted color */}
                <button className="btn btn-primary btn-sm" onClick={() => addToCart(product)}>Add</button> {/* Smaller button */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

// ProductList.js
import React, { useEffect, useState, useContext } from "react";
import "./ProductList.css";
import { CartContext } from "../context/CartContext"; // Import the CartContext

function ProductList({ category }) {
  const { addToCart } = useContext(CartContext); // Get the addToCart function from the CartContext
  const [products, setProducts] = useState([]);
  const [found, setfound] = useState("");
  console.log("girish;");
  useEffect(() => {
    // Fetch products based on the selected category
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setfound("No products found");
        } else {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [category]); // Re-fetch products whenever the category changes

  return (
    <div className="product-list">
      <h2>{category} Products</h2>
      {found ? (
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", // This will center the text vertically.
            color: "white", // Change this to the color you want for the text.
            backgroundColor: "grey", // Change this to the color you want for the background.
          }}
        >
          {found}
        </h3>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {" "}
          {/* Use Bootstrap responsive grid classes */}
          {products.map((product) => (
            <div key={product.id} className="col mb-4">
              <div className="card product-card h-70">
                <img
                  src={product.image}
                  className="card-img-top w-50 h-auto"
                  alt={product.title}
                />

                <div className="card-body p-2">
                  <h6 className="card-title mb-0">{product.title}</h6>
                  <p className="card-text text-muted">
                    $ {product.price.toFixed(2)}
                  </p>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => addToCart(product)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;

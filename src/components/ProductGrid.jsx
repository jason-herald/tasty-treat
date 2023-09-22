import React, { useContext } from "react";
import "./ExploreFoods.css";
import CartContext from "../context/CartContext";

function ProductGrid({ products }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="explore-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image01}
            alt={product.title}
            className="product-image"
          />
          <h3 className="product-title">{product.title}</h3>
          <div className="product-bottom">
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;

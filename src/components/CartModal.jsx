import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import "./CartModal.css";

function CartModal({ isOpen, onClose }) {
  const { cart, removeFromCart, updateCartQuantity } = useContext(CartContext);

  const subtotal = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className={`cart-modal ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="cart-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="spacer"></div>

        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image01}
              alt={item.title}
              className="cart-item-image"
            />

            <div className="item-info">
              <span>
                {item.title} - ${item.price.toFixed(2)}
              </span>

              <div className="quantity-controls">
                <button onClick={() => updateCartQuantity(item.id, -1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateCartQuantity(item.id, 1)}>
                  +
                </button>
              </div>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              X
            </button>
          </div>
        ))}

        <div className="cart-summary">
          <span>Subtotal: ${subtotal}</span>

          <Link to="/checkout" className="checkout-btn">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartModal;

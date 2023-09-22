import React, { useState, useContext } from "react";
import HeroImage from "./HeroImage";
import CartContext from "../context/CartContext";
import "./CheckoutPage.css";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [errors, setErrors] = useState({});

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 30.0;
  const total = subtotal + shipping;
  const handleValidation = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!name.trim()) formErrors.name = "Name is required";
    if (
      !email.trim() ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    )
      formErrors.email = "Valid email is required";
    if (!phone.trim() || phone.length !== 10)
      formErrors.phone = "Valid 10-digit phone number is required";
    if (!country.trim()) formErrors.country = "Country is required";
    if (!city.trim()) formErrors.city = "City is required";
    if (!postalCode.trim()) formErrors.postalCode = "Postal code is required";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0 && cart.length > 0) {
      clearCart();
      alert("Order placed successfully!");

      setName("");
      setEmail("");
      setPhone("");
      setCountry("");
      setCity("");
      setPostalCode("");
    }
  };

  return (
    <div className="checkout-container">
      <HeroImage text="Checkout" />

      <div className="checkout-content">
        <div className="shipping-address">
          <h2>Shipping Address</h2>
          <form>
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>
            <div>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
              />
              {errors.phone && (
                <span className="error-text">{errors.phone}</span>
              )}
            </div>
            <div>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
              />
              {errors.country && (
                <span className="error-text">{errors.country}</span>
              )}
            </div>
            <div>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
              />
              {errors.city && <span className="error-text">{errors.city}</span>}
            </div>
            <div>
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="Postal Code"
              />
              {errors.postalCode && (
                <span className="error-text">{errors.postalCode}</span>
              )}
            </div>
            <button
              className="payment-btn"
              onClick={handleValidation}
              disabled={cart.length === 0}
            >
              Payment
            </button>
          </form>
        </div>

        <div className="order-summary">
          <div>
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div>
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div>
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

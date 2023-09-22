import { createContext } from "react";

const CartContext = createContext({
  cart: [], // {id, title, quantity, price}[]
  addToCart: (item) => {},
  removeFromCart: (itemId) => {},
  updateCartQuantity: (itemId, quantity) => {},
  clearCart: () => {},
});

export default CartContext;

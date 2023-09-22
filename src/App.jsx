import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ExploreFoods from "./components/ExploreFoods";
import CheckoutPage from "./components/CheckoutPage";
import CartProvider from "./context/CartProvider";
import products from "./data/products";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route
              path="/explore-foods"
              element={<ExploreFoods products={products} />}
            />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route render={() => <h1>404: Page Not Found</h1>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;

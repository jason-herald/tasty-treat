import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import products from "../data/products";
import shippingIcon from "../images/service-01.png";
import secureIcon from "../images/service-02.png";
import rightImage from "../images/hero.png";
import category1 from "../images/category-01.png";
import category2 from "../images/category-02.png";
import category3 from "../images/category-03.png";
import category4 from "../images/category-04.png";
import FilterHeader from "./FilterHeader";
import ProductGrid from "./ProductGrid";

const HomePage = () => {
  const navigate = useNavigate();

  const redirectToExploreFoods = () => {
    navigate("/explore-foods");
  };

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(
          (product) => product.category.toLowerCase() === category
        )
      );
    }
  };
  return (
    <div className="home-container">
      <div className="main-content">
        <div className="home-content">
          <p className="small-text">Easy way to make an order</p>
          <h1>
            <span className="highlight">HUNGRY?</span> Just wait food at{" "}
            <span className="highlight">your door</span>
          </h1>

          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electroni
          </p>
          <div className="buttons">
            <button className="order-now" onClick={redirectToExploreFoods}>
              Order Now
            </button>
            <button className="see-all" onClick={redirectToExploreFoods}>
              See All Foods
            </button>
          </div>
          <div className="features">
            <div className="feature">
              <img src={shippingIcon} alt="Free Shipping" />
              <p>No shipping charge</p>
            </div>
            <div className="feature">
              <img src={secureIcon} alt="Secure Checkout" />
              <p>100% secure checkout</p>
            </div>
          </div>
        </div>
        <div className="home-image">
          <img src={rightImage} alt="Delicious Food" />
        </div>
      </div>
      <div className="features-section">
        <div className="feature-container">
          <img src={category1} alt="Feature 1" className="feature-image" />
          <p className="feature-text">Fast Food</p>
        </div>
        <div className="feature-container">
          <img src={category2} alt="Feature 2" className="feature-image" />
          <p className="feature-text">Pizza</p>
        </div>
        <div className="feature-container">
          <img src={category3} alt="Feature 3" className="feature-image" />
          <p className="feature-text">Asian Food</p>
        </div>
        <div className="feature-container">
          <img src={category4} alt="Feature 4" className="feature-image" />
          <p className="feature-text">Row Meat</p>
        </div>
      </div>
      <FilterHeader onFilterChange={handleFilterChange} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default HomePage;

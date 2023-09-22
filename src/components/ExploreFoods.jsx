import React, { useState } from "react";
import "./ExploreFoods.css";
import ProductGrid from "./ProductGrid";
import products from "../data/products";
import HeroImage from "./HeroImage";
import banner from "../images/banner-02.1d3252d3.jpg";

function ExploreFoodsPage() {
  return (
    <div className="explore-page-container">
      <HeroImage imageSrc={banner} text="All Foods" />
      <ProductGrid products={products} />
    </div>
  );
}

export default ExploreFoodsPage;

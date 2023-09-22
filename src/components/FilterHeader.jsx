import React, { useState } from "react";
import "./FilterHeader.css";
import bread from "../images/bread.png";
import pizza from "../images/pizza.png";
import hamburger from "../images/hamburger.png";

function FilterHeader({ onFilterChange }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "burger", name: "Burger", icon: hamburger },
    { id: "pizza", name: "Pizza", icon: pizza },
    { id: "bread", name: "Bread", icon: bread },
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category.id);
    onFilterChange(category.id);
  };

  return (
    <div className="filter-header">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`category-item ${
            activeCategory === category.id ? "active" : ""
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          {category.icon && (
            <img
              src={category.icon}
              alt={category.name}
              className="category-icon"
            />
          )}
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default FilterHeader;

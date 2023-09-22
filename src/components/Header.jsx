import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/res-logo.png";
import "./Header.css";
import CartModal from "./CartModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <header className="header">
      <div className="left">
        <div className="logo-container">
          <img src={logo} alt="App Logo" className="logo" />
          <p>Tasty Treat</p>
        </div>
      </div>

      <div className="center">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "link" : isActive ? "active-link link" : "link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/explore-foods"
          className={({ isActive, isPending }) =>
            isPending ? "link" : isActive ? "active-link link" : "link"
          }
        >
          Explore
        </NavLink>
      </div>

      <div className="right">
        <FontAwesomeIcon
          icon={faBasketShopping}
          className="icon"
          onClick={() => setIsCartOpen(true)}
        />
        <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <FontAwesomeIcon icon={faUser} className="icon" />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import logo from "../images/res-logo.png";

import facebookIcon from "../images/category-01.png";
import twitterIcon from "../images/category-02.png";
import instagramIcon from "../images/category-03.png";
import linkedinIcon from "../images/category-04.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section logo-section">
          <img src={logo} alt="Site Logo" className="logo" />
          <h2 className="site-name">Tasty Treat</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="footer-section delivery-time">
          <h3>Delivery Time</h3>
          <p>
            Sunday - Thursday
            <p>10:00am - 11:00pm</p>
          </p>
          <p>
            Friday - Saturday
            <p>Off days</p>
          </p>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Location: Zinda Bazaar, somewhere, Something</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: example@example.com</p>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our Newsletter here</p>
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="newsletter-input"
            />
            <button className="submit-button">Submit</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2023 Tasty Treat. All Rights Reserved.</p>

        <div className="socials">
          <div className="socials-container">
            <p>Follow: </p>

            <img src={facebookIcon} alt="Facebook" />
            <img src={twitterIcon} alt="Twitter" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={linkedinIcon} alt="LinkedIn" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

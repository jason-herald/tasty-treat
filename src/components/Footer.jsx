import React from "react";
import logo from "../images/res-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
          <p>Sunday - Thursday</p>
          <p>10:00am - 11:00pm</p>
          <p>Friday - Saturday</p>
          <p>Off days</p>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Location: ZindaBazaar, Sylhet-3100, Bangladesh</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: example@example.com</p>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our Newsletter</p>
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="newsletter-input"
            />
            <button className="submit-button">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2023 Tasty Treat. All Rights Reserved.</p>

        <div className="socials">
          <div className="socials-container">
            <p className="socials-txt">Follow: </p>

            <FontAwesomeIcon className="fa-icon" icon={faFacebook} size="2x" />
            <FontAwesomeIcon className="fa-icon" icon={faTwitter} size="2x" />
            <FontAwesomeIcon className="fa-icon" icon={faInstagram} size="2x" />
            <FontAwesomeIcon className="fa-icon" icon={faLinkedin} size="2x" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import { images } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={images.logo} alt="" />
          <p>
            Ecommerce or electronic commerce is the trading of goods and
            services online.
          </p>
          <div className="footer-social-icons">
            <img src={images.facebook_icon} alt="" />
            <img src={images.twitter_icon} alt="" />
            <img src={images.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+977 1234567890</li>
            <li>test@example.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© Copyright</p>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import "./Navbar.css";
import { images } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [product, setProduct] = useState("home");
  return (
    <div className="navbar">
      <Link to="/">
        <img src={images.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-product">
        <Link
          to="/"
          onClick={() => setProduct("home")}
          className={product === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-product"
          onClick={() => setProduct("product")}
          className={product === "product" ? "active" : ""}
        >
          Product
        </a>
        <a
          href="#footer"
          onClick={() => setProduct("contact-us")}
          className={product === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={images.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={images.basket_icon} alt="" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>SIGN IN</button>
      </div>
    </div>
  );
};

export default Navbar;

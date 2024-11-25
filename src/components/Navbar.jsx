import React, { useState } from "react";
import { images } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [product, setProduct] = useState("home");
  return (
    <div className="navbar flex justify-between items-center py-5">
      <Link to="/">
        <img src={images.logo} alt="" className="logo w-[150px]" />
      </Link>
      <ul className="navbar-product flex gap-5 text-red-500 text-lg">
        <Link
          to="/"
          onClick={() => setProduct("home")}
          className={`${
            product === "home" ? "active" : ""
          } cursor-pointer`}
        >
          Home
        </Link>
        <a
          href="#explore-product"
          onClick={() => setProduct("product")}
          className={`${
            product === "product" ? "active" : ""
          } cursor-pointer`}
        >
          Product
        </a>
        <a
          href="#footer"
          onClick={() => setProduct("contact-us")}
          className={`${
            product === "contact-us" ? "active" : ""
          } cursor-pointer`}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right flex items-center gap-10">
        <img src={images.search_icon} alt="" className="w-[20px]" />
        <div className="navbar-search-icon relative">
          <Link to="/cart">
            <img src={images.basket_icon} alt="" className="w-[20px]" />
          </Link>
          <div className="dot absolute top-[-3px] right-[-4px] w-[10px] h-[10px] bg-red-500 rounded-full"></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="border border-red-500 text-red-500 py-2 px-8 rounded-full transition duration-300 hover:bg-yellow-100"
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default Navbar;

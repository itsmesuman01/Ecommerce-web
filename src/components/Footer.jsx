import React from "react";
import { images } from "../assets/assets";

const Footer = () => {
  return (
    <div className="footer bg-[#f3b86b] text-black flex flex-col items-center gap-5 pt-[80px] px-[8vw] mt-[100px]">
      <div className="footer-content w-full grid grid-cols-3 gap-[80px]">
        <div className="footer-content-left flex flex-col items-start gap-5">
          <img src={images.logo} alt="Logo" />
          <p>
            Ecommerce or electronic commerce is the trading of goods and
            services online.
          </p>
          <div className="footer-social-icons flex gap-4">
            <img src={images.facebook_icon} alt="Facebook" className="w-[40px]" />
            <img src={images.twitter_icon} alt="Twitter" className="w-[40px]" />
            <img src={images.linkedin_icon} alt="LinkedIn" className="w-[40px]" />
          </div>
        </div>
        <div className="footer-content-center flex flex-col items-start gap-5">
          <h2 className="text-red-500">COMPANY</h2>
          <ul>
            <li className="cursor-pointer mb-2">Home</li>
            <li className="cursor-pointer mb-2">About us</li>
            <li className="cursor-pointer mb-2">Delivery</li>
            <li className="cursor-pointer mb-2">Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right flex flex-col items-start gap-5">
          <h2 className="text-red-500">GET IN TOUCH</h2>
          <ul>
            <li className="cursor-pointer mb-2">+977 1234567890</li>
            <li className="cursor-pointer mb-2">test@example.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[1px] my-5 bg-red-500 border-none" />
      <p className="footer-copyright">© Copyright</p>
    </div>
  );
};

export default Footer;

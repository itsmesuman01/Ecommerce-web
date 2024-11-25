import React from 'react';
import { images } from "../assets/assets";

const Header = () => {
  return (
    <div className="header bg-red-500 h-[34vw] my-8 bg-cover bg-center relative" style={{ backgroundImage: `url(${images.header_img})` }}>
      <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn">
        <h2 className="font-medium text-red-500 text-[max(4.5vw,_22px)] text-shadow-lg">
          Order your product
        </h2>
        <p className="text-red-500 text-[1vw]">
          Shoes are a type of footwear designed to protect and provide comfort to the feet while walking, running, or standing
        </p>
        <button className="border-none text-red-500 font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,_13px)] rounded-full">
          View Product
        </button>
      </div>
    </div>
  );
};

export default Header;

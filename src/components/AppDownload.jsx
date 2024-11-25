import React from "react";
import { images } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="my-auto mt-[100px] text-center text-[max(3vw,_20px)] font-medium" id="app-download">
      <p>
        For Better Experience Download <br /> Download MYAPP
      </p>
      <div className="flex justify-center gap-[max(2vw,_10px)] mt-[40px]">
        <img
          src={images.play_store}
          alt="Play Store"
          className="w-[max(30vw,_120px)] max-w-[180px] transition-transform duration-500 cursor-pointer hover:scale-105"
        />
        <img
          src={images.app_store}
          alt="App Store"
          className="w-[max(30vw,_120px)] max-w-[180px] transition-transform duration-500 cursor-pointer hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AppDownload;

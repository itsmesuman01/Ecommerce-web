import React, { useState } from "react";
import { images } from "../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");
  return (
    <div className="login-popup fixed inset-0 z-10 bg-black bg-opacity-60 grid place-items-center">
      <form className="login-popup-container w-[min(23vw,330px)] bg-white p-6 rounded-lg text-gray-500 flex flex-col gap-6 animate-fadeIn">
        <div className="login-popup-title flex justify-between items-center text-black">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={images.cross_icon}
            alt=""
            className="w-4 cursor-pointer"
          />
        </div>
        <div className="login-popup-inputs flex flex-col gap-5">
          {currState === "Login" && (
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="outline-none border border-gray-300 p-2 rounded-md"
            />
          )}
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="outline-none border border-gray-300 p-2 rounded-md"
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="outline-none border border-gray-300 p-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="border-none p-2 rounded-md text-white bg-orange-500 text-base cursor-pointer"
        >
          {currState === "Sign up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition flex items-start gap-2 mt-[-15px]">
          <input type="checkbox" required className="mr-2" />
          <p>Terms and the conditions</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setCurrState("Sign up")}
              className="text-orange-500 font-semibold cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="text-orange-500 font-semibold cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;

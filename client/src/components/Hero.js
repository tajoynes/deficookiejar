import React from "react";
import { Link } from "react-router-dom";
import investing from "../assets/images/investing.jpg";
import cookie from "../assets/images/cookie.png";

const Hero = () => {
  return (
    <div className="h-screen w-screen flex flex-col relative justify-center text-center items-center bg-teal-200 overflow-y-hidden ">
      <blockquote className=" text-2xl md:text-5xl font-mono px-10 object-contain">
        <img src={cookie} className="ml-44 h-10 w-10" />
        <img src={cookie} className="ml-auto h-10 w-10" />
        Start filling your cookie jar today
        <img src={cookie} className="h-10 w-10" />
        <img src={cookie} className="ml-80 h-10 w-10" />
        <img src={cookie} className="ml-auto mr-40 h-10 w-10" />
      </blockquote>
      <button className="group mt-7 py-3 px-7 flex items-center bg-cyan-500 hover:bg-cyan-600 rounded-full">
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-5  group-hover:translate-x-1 transition duration-500 ease-in-out"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
      <p className="my-2 text-gray-500 absolute bottom-20">
        Life's short. Enjoy your cookies.
      </p>
    </div>
  );
};

export default Hero;

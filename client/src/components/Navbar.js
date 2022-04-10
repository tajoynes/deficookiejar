import React from "react";
import { Link } from "react-router-dom";
import cookie from "../assets/images/cookie.png";

function Navbar() {
  return (
    <nav className="flex justify-between px-2 items-center h-16 font-mono">
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
      <div className="pl-8 md:block hidden">
        <Link
          className="mr-4 hover:bg-cyan-600 px-1 py-1 transition duration-500 ease-in-out rounded"
          to="/"
        >
          Home
        </Link>
        <Link
          className="mr-4 hover:bg-cyan-600 px-1 py-1 transition duration-500 ease-in-out  rounded "
          to="/"
        >
          Learn More
        </Link>
        <Link
          className="mr-4 hover:bg-cyan-600 px-1 py-1 transition duration-500 ease-in-out rounded "
          to="/"
        >
          DeFi?
        </Link>
      </div>
      <Link to="/" className="pr-5">
        <img src={cookie} height={40} width={40} />
      </Link>
    </nav>
  );
}

export default Navbar;

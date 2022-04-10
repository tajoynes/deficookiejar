import React from "react";
import money from "../assets/images/money.png";
import stopwatch from "../assets/images/stopwatch.png";
import bitcoin from "../assets/images/bitcoin.png";
import ethereum from "../assets/images/ethereum.png";
import cellinvesting from "../assets/images/cellinvesting.png";

const Content = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-teal-100 h-fit w-screen p-10 mt-3 mb-3 ">
      <div className="flex flex-col text-center items-center mx-10">
        <h1 className="font-mono text-3xl mb-6">let your money earn</h1>
        <p className="text-base md:text-lg leading-loose">
          Discover an easier way to invest in digital assets
        </p>
        <p className="text-base md:text-lg leading-loose">
          Use our preset fixed term lengths or create your own flexible term
          length
        </p>
        <img src={cellinvesting} className="mt-10 object-contain h-4/5 w-4/5" />
        <div className="bg-white border border-teal-400 rounded-md flex p-3 m-3 drop-shadow-md">
          <h1>Family Vacation Plans</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="bg-white border border-teal-400 rounded-md flex p-3 m-3 drop-shadow-md">
          <h1>New Car Purchase</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="bg-white border border-teal-400 rounded-md flex p-3 m-3 drop-shadow-md">
          <h1>NFT project or Metaverse Land</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <div className="bg-white h-full rounded-full place-items-center text-center flex-col gap-5 mr-10 pt-28 p-5 hidden md:flex drop-shadow-md">
        <h4 className="font-mono text-2xl">Getting Started</h4>
        <ul>
          <lh className="">Step 1: Download & Install </lh>
          <li>Firefox or chrome browser</li>
          <li>Metamask browser extension</li>
        </ul>
        <ul>
          <lh className="">Step 2: Set Up</lh>
          <li>Metamask Account</li>
        </ul>
        <ul>
          <lh className="">Step 3: Connect & Deposit</lh>
          <li>Connect Metamask to our website</li>
          <li>Deposit your favourite digital Asset</li>
        </ul>
        <ul>
          <lh className="">Step 4: Set Options</lh>
          <li>Set your investing term</li>
          <li>Deposit your favourite digital Asset</li>
        </ul>
        <ul>
          <lh className="">Step 5: Enjoy</lh>
          <li>
            Grab your favourite cookie!<br></br> Celebrate taking a step to
            building personal finance
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Content;

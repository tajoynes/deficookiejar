import React from "react";

const Footer = () => {
  return (
    <div className="bg-teal-300 h-fit w-screen py-14  px-10 md:px-28">
      <div className="grid grid-cols-2 py-20 gap-10">
        <div className="col-span-3 md:col-span-1">
          <span className="bg-yellow-700 flex border border-teal-400 rounded-md h-20 w-auto p-3 m-3 drop-shadow-md font-mono">
            No minimum amount
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </span>
          <span className=" bg-yellow-600 focus:shadow-lg flex  border border-teal-400 rounded-md h-20 w-auto p-3 m-3 drop-shadow-md font-mono">
            Earn interest
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
        <div className="flex flex-col items-center col-span-3 md:col-span-1">
          <h3 className="font-mono font-bold text-2xl mb-5">
            You Scrolled Wayyy to far
          </h3>
          <ul className="">
            <li className="flex justify-center font-mono p-2 text-center hover:text-yellow-700 focus:border-blue-400 transition duration-300 ease-in-out drop-shadow-md">
              Go back home{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-5 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </li>
            <li className="flex justify-center font-mono p-2 text-center border border-teal-400 rounded-md drop-shadow-md">
              Learn About Cookie Jar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-5 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </li>
            <li className="flex justify-center font-mono p-2 text-center border border-teal-400 rounded-md drop-shadow-md">
              DeFi{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-5 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center font-thin text-xs">
        Digital currency is not legal tender, is not backed by any federal
        government and Donut accounts are not FDIC insured. Please note that any
        investment entails risk. The interest rates featured on this page vary
        according to the dynamics of digital currency markets and are subject to
        change at any time.
      </p>
    </div>
  );
};

export default Footer;

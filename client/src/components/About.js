import React from "react";
import cookiejar from "../assets/images/cookiejar.png";
import cookie from "../assets/images/cookie.png";

const About = () => {
  return (
    <div className="bg-teal-200 h-fit w-screen py-8  px-12 mb-3 ">
      <div className="grid grid-flow-row auto-rows-max  text-center">
        <div className="md:px-20 mb-8">
          <span className=" border border-teal-400 rounded-md block w-1/2 p-3 m-3 drop-shadow-md font-mono bg-green-500 animation-pulse">
            Short Term
          </span>
          <span className=" border border-teal-400 rounded-md block w-2/3 p-3 m-3 drop-shadow-md font-mono bg-yellow-500 animation-pulse">
            Medium Term
          </span>
          <span className="border border-teal-400 rounded-md block w-5/6 p-3 m-3 drop-shadow-md font-mono bg-red-500 animation-pulse">
            Long Term
          </span>
        </div>
        <div className="grid grid-cols-2 mb-8 ">
          <h1 className="flex justify-center mb-2 font-mono text-2xl col-span-2 md:col-start-2 md:col-end-2">
            What's Cookie Jar?
            <img src={cookie} className="ml-5 h-8 w-8 pr-0 mr-0" />
          </h1>
          <div className=" bg-white h-1 mb-2 col-span-2 md:col-start-2 md:col-end-2" />
          <p className="text-lg leading-loose md:text-xl col-span-2 md:col-start-2 md:col-end-2">
            Cookie Jar is a application designed to bring decentralized finance
            to the mainstream public by being inclusive in an ever growing
            financial economy Cookie Jar lets users have more control of their
            finances
          </p>
          <p className="text-lg leading-loose md:text-xl col-span-2 md:col-start-2 md:col-end-2">
            DeFi gives the power of financial independence back to the users
          </p>
        </div>
        <div className="grid grid-cols-2">
          <h1 className="flex justify-center font-mono text-2xl mb-2 col-span-2 md:col-start-1 md:col-end-2">
            Why Cookie Jar?
            <img src={cookiejar} className="ml-5 h-8 w-8 pr-0 mr-0" />
          </h1>
          <div className=" bg-white h-1 mb-2 col-span-2 md:col-start-1 md:col-end-2" />
          <p className="text-lg md:text-xl leading-loose col-span-2 md:col-start-1 md:col-end-2">
            Ever tried saving for a trip? or a next big event? but find it
            difficult to do so despite all best efforts to do so?
          </p>
          <p className="text-lg md:text-xl leading-loose col-span-2 md:col-start-1 md:col-end-2">
            Cookie Jar allows you the space to invest in your future plans.{" "}
            Cookie Jar allows you to determine how long you want to set money
            aside and set how frequently you want to make deposits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

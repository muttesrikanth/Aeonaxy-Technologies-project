import React from "react";

const GetStarted = () => {
  return (
    <div className="flex justify-between sm:mx-10 sm:mt-0 m-1 sm:px-10 pb-10">
      <p className=" text-left font-bold font-roboto text-[30px] sm:text-[48px]">
        Join over 10 million people learning on Brilliant
      </p>

      <div className="flex flex-col justify-center">
        <button className="transition duration-1000 whitespace-nowrap sm:px-8 sm:py-3 px-4 border border-2 border-green-700 font-roboto bg-green-700 text-white font-bold rounded-md hover:bg-blue-600 hover:text-gray-900">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;

import React from "react";

const Press = () => {
  return (
    <div className="sm:m-10 sm:mt-0 m-1 sm:px-10 border-b-2 border-gray-900  transition-all duration-[1s]">
      <p className="text-[38px] font-bold mb-10">Press</p>
      <div className="flex justify-between">
        <div className="w-full">
          <i class="fa-brands fa-apple text-[30px] sm:text-[80px] text-gray-500 mb-8"></i>
          <hr />

          <p className="text-gray-700 sm:text-3xl font-medium mt-3">
            March 2020
          </p>
          <p className="text-gray-900 sm:text-3xl font-bold mb-10">
            She puzzled it out
          </p>
          <div>
            <img
              className="pt-10 w-40 mb-8"
              src="./atlantic.png"
              alt="atlantic"
            />
          </div>
          <hr />

          <p className="text-gray-700 sm:text-3xl font-medium mt-3">
            November 2016
          </p>
          <p className="text-gray-900 sm:text-3xl font-bold mb-10">
            The Math Revolution
          </p>
        </div>
        <div className="w-full pl-5">
          <div className="flex">
            <i class="fa-brands fa-microsoft text-[30px] sm:text-[80px] text-gray-500 mb-8"></i>
            <span className="flex sm:mt-3 text-gray-500 font-bold pl-2 justify-center sm:text-[40px]">
              Microsoft
            </span>
          </div>
          <hr />

          <p className="text-gray-700 sm:text-3xl font-medium mt-3">May 2019</p>
          <p className="text-gray-900 sm:text-3xl font-bold mb-10">
            Microsoft, Brilliant team up to offer
          </p>
          <img
            className="pt-10 w-70 sm:mb-2 mb-10"
            src="./times.jpg"
            alt="times"
          />
          <hr />

          <p className="text-gray-700 sm:text-3xl font-medium mt-3">
            March 2016
          </p>
          <p className="text-gray-900 sm:text-3xl font-bold mb-10">
            March 2016 Reasonable-Seeming but WRONG Approximations of π
          </p>
        </div>
      </div>
    </div>
  );
};

export default Press;

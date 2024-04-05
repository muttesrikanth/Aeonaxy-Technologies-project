import React from "react";
const Summary = () => {
  return (
    <div className="text-center  items-center leading-tight sm:p-10 p-3 ">
      <h1 className="whitespace-normal text-center font-bold font-roboto text-[48px] md:text-[48px] lg:text-[68px]">
        We’re building the
      </h1>
      <h1 className="whitespace-normal text-center font-bold font-roboto text-[48px] md:text-[48px] lg:text-[68px]">
        best place on Earth to learn
      </h1>
      <h1 className="whitespace-normal text-center font-bold font-roboto text-[48px] md:text-[48px] lg:text-[68px]">
        math and science.
      </h1>
      <div className="flex justify-around  align-center border-b-2 border-gray-900 sm:m-10 m-1 sm:px-10">
        <div className=" flex flex-col justify-end ">
          <img
            className=" flex flex-col justify-end sm:w-[150px]  h-[150px] mb-[1px]"
            src="../engineer.png"
            alt="engineerlogo"
          />
        </div>
        <p className="font-roboto font-medium text-2xl text-gray-700 sm:px-10 p-2">
          In the process, we’ve been happy to receive a lot of love from our
          users.
        </p>
        <div className=" flex flex-col justify-end ">
          <img
            className="sm:w-[150px]   h-[150px] mb-[1px]"
            src="toolkit.png"
            alt="toolkitlogo"
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;

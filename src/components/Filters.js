import React from "react";

const Filters = () => {
  const buttons = document.querySelectorAll("#button-container button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("btn-clicked");
      });
      button.classList.add("btn-clicked");
    });
  });
  return (
    <div className="flex justify-between flex-row sm:ml-10 m-1  transition-all duration-[2s]">
      <div className="h-[fit-content] border border-slate-900 m-2 rounded-lg sm:w-[350px] w-full flex">
        <button className="border-r-2 border-gray-400 pr-auto  py-1 sm:py-3 pl-2 pr-2 sm:pl-6 flex-grow  text-left">
          {" "}
          Featured
        </button>
        <i className="fa-solid fa-caret-down sm:p-4 p-2 "></i>
      </div>
      <div id="button-container" className=" flex-wrap self-end w-[55%]">
        <button className="sm:py-3 py-1 px-2 sm:px-5 border-2 border-gray-300 m-2 rounded">
          All
        </button>
        <button className="sm:py-3 py-1 px-2 sm:px-5 border-2 border-gray-300 m-2 rounded">
          Students
        </button>
        <button className="sm:py-3 py-1 px-2 sm:px-5 border-2 border-gray-300 m-2 rounded">
          Teachers
        </button>
        <button className="sm:py-3 py-1 px-2 sm:px-5 border-2 border-gray-300 m-2 rounded">
          Professionals
        </button>
        <button className="sm:py-3 py-1 px-2 sm:px-5 border-2 border-gray-300 m-2 rounded">
          Parents
        </button>
        <button className="sm:py-3 py-1 px-2 sm:px-5 border-2 border-gray-300 m-2 rounded">
          Life-long learners
        </button>
      </div>
    </div>
  );
};

export default Filters;

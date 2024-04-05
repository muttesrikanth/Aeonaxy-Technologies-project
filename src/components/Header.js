import React from "react";

const Header = () => {
  return (
    <header className="flex sm:p-7 p-3 justify-between transition-all duration-[2s]">
      <img
        className="w-40 h-10"
        src="./Briliantimage.png"
        alt="Briliant logo"
      />
      <button className=" whitespace-nowrap sm:px-7 px-4 border border-2 border-gray-900 font-roboto font-bold rounded-md hover:bg-blue-600 hover:text-white transition-all duration-5000">
        Log in
      </button>
    </header>
  );
};

export default Header;

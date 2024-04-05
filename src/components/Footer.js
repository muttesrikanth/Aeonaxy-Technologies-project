import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-900 text-white flex pl-3 sm:pl-0 sm:flex-row flex-col justify-between  min-h-[300px] max-h-full pt-10  transition-all duration-[2s]">
        <div className="image items-start">
          <img className="w-40" src="Briliantimage.png" alt="logo" />
        </div>
        <div></div>
        <div>
          <p className="font-bold">Company</p>
          <ul className="text-gray-400">
            <li>About Us</li> <li>Careers</li> <li>Educators</li>
            <li>Press</li> <li>Help</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Product</p>
          <div className="flex flex-col justify-between pb-10 h-full">
            <ul className="text-gray-400">
              <li>Courses</li> <li>Pricing</li> <li>Testimonials</li>
            </ul>

            <ul className="flex">
              <li>
                <i className="fa-brands fa-facebook text-2xl mr-5"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram  text-2xl mr-5"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter  text-2xl mr-5"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin-in text-2xl mr-5"></i>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
      <div className="text-white  bg-gray-900 flex sm:flex-row flex-col justify-center pt-[100px]">
        <div className=" flex flex-row justify-around text-center info-links p-2">
          <span className="md:p-2">Help</span>{" "}
          <span className="md:p-2 whitespace-nowrap">Terms of Service</span>{" "}
          <span className="md:p-2 whitespace-nowrap">Privacy Pocy</span>{" "}
          <span className="md:p-2 whitespace-nowrap">CPP</span>
        </div>
        <div className="md:mt-4 pl-2 whitespace-wrap">
          © 2024 Brilliant Worldwide, Inc., Brilliant and the Brilliant Logo are
          trademarks of Brilliant Worldwide, Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

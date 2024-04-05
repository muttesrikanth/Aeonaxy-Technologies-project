import React from "react";

const Reviews = () => {
  return (
    <div className="flex justify-between sm:m-10 sm:mt-0 m-1 sm:px-10">
      <div class="flex flex-col justify-center p-2 sm:p-5">
        <h2 className="whitespace-normal font-bold font-roboto text-[38px] md:text-[38px] lg:text-[58px]">
          User reviews
        </h2>
        <p className="font-roboto font-medium text-xl text-gray-700 ">
          Over 50,000 5-star reviews in the App Store and Play Store
        </p>
      </div>
      <div className="flex flex-col justify-center p-2 sm:p-5">
        <img src="5star.jpg" alt="5starlogo" />
      </div>
    </div>
  );
};

export default Reviews;

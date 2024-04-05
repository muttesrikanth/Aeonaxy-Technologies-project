import React from "react";

const RatingReviewsHoc = ({ btntext, coments, name, store }) => {
  return (
    <>
      <hr />
      <div className="mt-10 mb-4">
        <i className="fa-solid fa-star text-yellow-500 "></i>
        <i className="fa-solid fa-star text-yellow-500 "></i>
        <i className="fa-solid fa-star text-yellow-500 "></i>
        <i className="fa-solid fa-star text-yellow-500 "></i>
        <i className="fa-solid fa-star text-yellow-500 "></i>
      </div>
      <div className="mb-4">
        <p className="text-xl">
          <span className="font-bold">{name}</span>
          {store}
        </p>
      </div>
      <div>
        <p>{coments}</p>
      </div>
      <button className="rounded rounded-3xl px-7 py-1.5 mt-3 mb-5 border border-gray-300">
        {btntext}
      </button>
    </>
  );
};

export default RatingReviewsHoc;

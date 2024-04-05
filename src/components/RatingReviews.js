import React from "react";
import RatingReviewsHoc from "../common/RatingReviewsHoc";

const RatingReviews = () => {
  return (
    <div className="flex justify-between sm:m-10 sm:mt-0 m-1 sm:px-10 border-b-2 border-gray-900">
      <div className="w-[40%] flex flex-col justify-end pr-2 sm:pr-10">
        <img src="./Satrocket.jpg" className="sm:h-full h-1/2 " alt="rocket" />
      </div>
      <div className="w-[60%]">
        <RatingReviewsHoc
          btntext="PROFESSIONALS"
          coments="Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations. "
          name="Jacob snider"
        />
        <RatingReviewsHoc
          btntext="LEARNERS"
          coments="This is great, I work in physics and have picked up a couple of new techniques. For anyone of any age this will help fill in the gaps from school, whether you're still there or it's a distant memory!"
          name="Aran Price"
          store="- Google Play"
        />
        <RatingReviewsHoc
          btntext="PARENTS"
          coments="Very impressed with @brilliantorg so far 👏 Its not often I feel sincere joy for learning which is a massive shame but interactive experiences like this make it difficult not to. I'm actually really looking forward to next time I get half an hour to go through another lesson."
          name="Daniel Metcalfe"
          store="- Twitter"
        />
        <RatingReviewsHoc
          btntext="STUDENTS"
          coments="I love this app, it helped me understand so many things that used to give me headaches in high school. Now, thanks to brilliant, I love knowledge and learning. I also was in the top 1% on the national exam that my country does for high school graduates, all of this thanks to brilliant! I didn’t prepare much for the exam, I just studied on brilliant for a year."
          name="CrDuque23"
          store="- App Store"
        />
        <RatingReviewsHoc
          btntext="STUDENTS"
          coments="Brilliant has opened new doors for my understanding of Physics and Mathematics. I am simply inspired by the effort of the team. I suggest beginners to start from Mathematics Fundamentals, Pre Algebra. THANK YOU, BRILLIANT!!!"
          name="Bimala Gurung"
          store="- Google Play"
        />
        <p className="my-10 py-10">{" < 1 of 2 > "} </p>
      </div>
    </div>
  );
};

export default RatingReviews;

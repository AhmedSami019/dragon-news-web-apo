import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-4 my-5">
      <h2 className="text-white font-semibold bg-secondary p-3">Latest</h2>
      <Marquee className="flex gap-10">
        <p className="text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, id.
          A, numquam reprehenderit. Architecto dolorum sapiente ea adipisci
          sequi eveniet.
        </p>
        <p className="text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, id.
          A, numquam reprehenderit. Architecto dolorum sapiente ea adipisci
          sequi eveniet.
        </p>
        <p className="text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, id.
          A, numquam reprehenderit. Architecto dolorum sapiente ea adipisci
          sequi eveniet.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
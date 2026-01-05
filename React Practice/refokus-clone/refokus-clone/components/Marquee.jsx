import React from "react";

const Marquee = ({ imgArray }) => {
  return (
    <div className="flex w-full py-8 items-center gap-16 whitespace-nowrap overflow-hidden">
      {imgArray.map((item, index) => (
        <img src={item} alt="" className="w-32 h-12 flex-shrink-0" />
      ))}
      {imgArray.map((item, index) => (
        <img src={item} alt="" className="w-32 h-12 flex-shrink-0" />
      ))}
    </div>
  );
};

export default Marquee;

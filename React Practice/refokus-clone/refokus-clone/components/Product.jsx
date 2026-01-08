import React from "react";
import StyledButton from "./StyledButton";

const Product = ({ info, handleProjectHover, index }) => {
  return (
    <div
      className="w-full py-20 h-[23rem]  text-white"
      onMouseEnter={() => handleProjectHover(index)}
    >
      <div className="max-w-screen-xl  mx-auto flex items-center justify-between">
        <div className="product-title text-6xl capitalize font-medium">
          {info.title}
        </div>
        <div className="product-details w-1/3">
          <p className="mb-10">{info.description}</p>
          <div className="btn-wrap-prod flex gap-8">
            {info.live && <StyledButton title={"Live Website"} />}
            {info.case && <StyledButton title={"Case Study"} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

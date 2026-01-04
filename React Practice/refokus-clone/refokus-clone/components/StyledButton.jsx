import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const StyledButton = ({ title = "Get Started" }) => {
  return (
    <div className="w-40 px-4 py-1 bg-zinc-100 text-black rounded-full flex items-center justify-between cursor-pointer">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight size={"1.5em"} />
    </div>
  );
};

export default StyledButton;

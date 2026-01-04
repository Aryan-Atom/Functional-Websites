import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const StyledButton = () => {
  return (
    <div className="min-w-40 px-4 py-1 bg-zinc-100 text-black rounded-full flex items-center justify-between">
      <span className="text-sm font-medium">Get Started</span>
      <IoIosReturnRight size={"1.5em"} />
    </div>
  );
};

export default StyledButton;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ width, headerMain, footerInfo, hoverColor = false }) => {
  return (
    <div
      className={`${width} bg-zinc-800 p-5 rounded-xl min-h-96 ${
        hoverColor && "hover:bg-violet-600"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="top-items-card">
          <div className="w-full flex justify-between items-center">
            <h3>Up Next : Culture</h3>
            <FaArrowRightLong />
          </div>
          <h1 className="text-3xl mt-5">Who we are</h1>
        </div>
        <div>
          <div className="down w-full">
            {headerMain && (
              <>
                <h1 className=" text-6xl font-semibold tracking-tight leading-none">
                  start a project
                </h1>

                <button className="rounded-full border border-zinc-200 px-4 py-1 mt-5">
                  Contact Us
                </button>
              </>
            )}
            {footerInfo && (
              <p className="text-sm text-zinc-500 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

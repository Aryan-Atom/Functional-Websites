import { motion } from "motion/react";
import React from "react";

const Marquee = ({ imgArray }) => {
  return (
    <div className="flex w-full py-8 items-center gap-16 whitespace-nowrap overflow-hidden">
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className="flex shrink-0 gap-40 py-10 pr-40"
      >
        {imgArray.map((item, index) => (
          <img key={index} src={item} alt="" className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className="flex shrink-0 gap-40 py-10 pr-40"
      >
        {imgArray.map((item, index) => (
          <img key={index} src={item} alt="" className="" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;

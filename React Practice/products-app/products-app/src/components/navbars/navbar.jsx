import React, { useState } from "react";
import { navbarData } from "./navbarData";

const Navbar = () => {
  const [navData, _] = useState(navbarData());

  return (
    <div className="w-100 h-screen border-r-4 border-zinc-700 p-8">
      <h1 className="bg-blue-100 w-fit p-4 rounded-full font-bold text-2xl text-orange-400 mb-8">
        {"Atom's Shop  :)"}
      </h1>
      {navData?.map((navitem, index) => (
        <h1
          className="ml-10 px-12 py-4 mt-10 bg-zinc-300 text-xl w-50 rounded-full hover:bg-zinc-500 transition-all ease-in-out duration-700 font-bold "
          key={index}
        >
          {navitem.name}
        </h1>
      ))}
    </div>
  );
};

export default Navbar;

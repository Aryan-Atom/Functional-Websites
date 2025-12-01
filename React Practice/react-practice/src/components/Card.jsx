import React from "react";

const Card = ({ item, handleRemove, id }) => {
  return (
    <div className=" h-64 w-52 bg-zinc-800 rounded-md p-4 flex flex-col items-center gap-4 border border-zinc-500 relative">
      <div className="h-24 w-24 rounded-full overflow-hidden">
        <img src={item.image} alt="profile-img" className="w-full h-full" />
      </div>
      <div className="font-semibold bg-zinc-700 p-1 px-8 rounded-full text-white">
        {item.name}
      </div>
      <div className="text-zinc-100">
        Lorem ipsum dolor sit amet consectetur
      </div>
      <div
        className="rounded-full bg-red-700 font-semibold px-6 py-2 absolute bottom-[-20px] text-white cursor-pointer"
        onClick={() => handleRemove(id)}
      >
        Remove
      </div>
    </div>
  );
};

export default Card;

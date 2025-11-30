import React from "react";

const Card = ({ item }) => {
  return (
    <div className=" h-64 w-52 bg-zinc-800 rounded-md p-4 flex flex-col items-center gap-4 border border-zinc-500">
      <div className="h-24 w-24 rounded-full overflow-hidden">
        <img src={item.image} alt="profile-img" className="w-full h-full" />
      </div>
      <div className="font-semibold bg-zinc-700 p-1 px-8 rounded-full text-white">
        {item.name}
      </div>
      <div className="text-zinc-100">
        Lorem ipsum dolor sit amet consectetur adipisicing. Test Arbok
      </div>
    </div>
  );
};

export default Card;

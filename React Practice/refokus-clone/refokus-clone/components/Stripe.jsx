import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="w-80 px-4 py-3 border-t border-b border-r border-zinc-700 flex justify-between items-center">
      <img
        style={{ filter: "invert(100%)", height: "18px" }}
        src={val.url}
        alt=""
      />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};

export default Stripe;

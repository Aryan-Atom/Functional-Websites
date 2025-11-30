import React from "react";
import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <div className="p-8 h-[600px] flex flex-wrap gap-10 overflow-auto">
      {data?.map((item, index) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default Cards;

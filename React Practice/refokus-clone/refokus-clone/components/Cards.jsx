import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-1">
        <Card width={"basis-1/3"} headerMain={false} footerInfo={true} />
        <Card
          width={"basis-2/3"}
          headerMain={true}
          footerInfo={false}
          hoverColor={true}
        />
      </div>
    </div>
  );
};

export default Cards;

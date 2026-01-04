import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  const data = [
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6796cbd97af8fb6fc9bbb4c6_cssda.svg",
      number: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6796cbd9401c4b4e8378786d_fwa.svg",
      number: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6796cbd90e91519a09b8b326_awwwards.svg",
      number: 11,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6796cbd97af8fb6fc9bbb4c6_cssda.svg",
      number: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6796cbd9401c4b4e8378786d_fwa.svg",
      number: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6796cbd90e91519a09b8b326_awwwards.svg",
      number: 11,
    },
  ];
  return (
    <div className="flex w-full">
      {data.map((item, index) => (
        <Stripe key={index} val={item} />
      ))}
    </div>
  );
};

export default Stripes;

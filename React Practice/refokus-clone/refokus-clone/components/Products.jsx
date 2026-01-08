import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

const Products = () => {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      video: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
      video: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
      video: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      video: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: true,
      video: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    },
  ];

  const [pos, setPos] = useState(0);

  const handleProjectHover = (index) => {
    setPos(index * 23);
  };

  return (
    <div className="w-full h-full relative">
      {products.map((prod, indx) => (
        <Product
          key={indx}
          info={prod}
          handleProjectHover={handleProjectHover}
          index={indx}
        />
      ))}
      <div className="main-overlay absolute w-full h-full top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{
            ease: "cubic-bezier(0.76, 0, 0.24, 1)",
            duration: 0.65,
          }}
          className="window absolute h-[23rem] w-96 left-[45%] overflow-hidden"
        >
          {products.map((item, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + "rem" }}
              transition={{
                ease: "cubic-bezier(0.76, 0, 0.24, 1)",
                duration: 0.6,
              }}
              className="video-items h-full w-full flex items-center"
            >
              <img
                src={item.video}
                alt={item.title}
                className="h-60 w-full object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

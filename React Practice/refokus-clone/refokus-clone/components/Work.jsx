import React, { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1634655685926-944d0254af90?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=836&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "53%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682124690265-f9135fbe81bc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682124865982-86f0aa859b01?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "59%",
      left: "49%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682124841272-aee539eea374?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "62%",
      left: "53%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  const imagesShow = (arr) => {
    setImages((prev) =>
      prev.map((item, index) =>
        arr.indexOf(index) === -1
          ? { ...item, isActive: false }
          : { ...item, isActive: true }
      )
    );
  };
  scrollYProgress.on("change", (data) => {
    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        console.log("0");
        break;
      case 1:
        imagesShow([0]);
        break;
      case 3:
        imagesShow([0, 1]);
        break;
      case 5:
        imagesShow([0, 1, 2]);
        break;
      case 6:
        imagesShow([0, 1, 2]);
        break;
      case 7:
        imagesShow([0, 1, 2, 3]);
        break;
    }
  });

  return (
    <div className="w-full mb-24">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none tracking-tight select-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  src={elem.url}
                  className="absolute w-60 rounded-md -translate-y-[50%] -translate-x-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                  alt="work-image"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;

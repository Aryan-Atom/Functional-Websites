import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Navbar from "../components/Navbar";
import Work from "../components/Work";
import Stripes from "../components/Stripes";
import Products from "../components/Products";
import Marquees from "../components/Marquees";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const App = () => {
  const scrollRef = useRef(null);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });

  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="w-full h-full bg-zinc-900 text-white"
    >
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;

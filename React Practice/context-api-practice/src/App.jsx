import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <nav className="flex items-center justify-around font-semibold bg-zinc-300 p-5 ">
        <Link to={"/"} className="hover:text-blue-600">
          Home
        </Link>
        <Link to={"/about"} className="hover:text-blue-600">
          About
        </Link>
        <Link to={"/contact"} className="hover:text-blue-600">
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

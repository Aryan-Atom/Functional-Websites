import React from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen w-screen px-40 py-20">
      <Cards />
      <Form />
    </div>
  );
};

export default App;

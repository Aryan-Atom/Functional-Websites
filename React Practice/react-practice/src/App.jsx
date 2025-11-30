import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () => {
  const [data, setData] = useState([]);

  const handleSubmitInfo = (value) => {
    setData([...data, value]);
  };

  return (
    <div className="bg-zinc-900 h-screen w-screen px-40 py-20">
      <Cards data={data} />
      <Form handleSubmitInfo={handleSubmitInfo} />
    </div>
  );
};

export default App;

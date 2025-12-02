import React, { useContext } from "react";
import { UserContext } from "../utils/Context";

const Home = () => {
  const { data, setData } = useContext(UserContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl">Users</h1>
      <div className="mt-4">
        
      </div>
    </div>
  );
};

export default Home;

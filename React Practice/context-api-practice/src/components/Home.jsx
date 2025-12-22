import React, { useContext } from "react";
import { UserContext } from "../utils/Context";
import User from "./User";

const Home = () => {
  const { data, setData } = useContext(UserContext);
  console.log(data);

  return (
    <div className="p-4">
      <h1 className="text-2xl">Users</h1>
      <div className="mt-4">
        {data?.map((user, indx) => (
          <User key={user?.id} user={user} />
        ))}
      </div>
      {/* <button onClick={() => setData([1])}>abdx</button> */}
    </div>
  );
};

export default Home;

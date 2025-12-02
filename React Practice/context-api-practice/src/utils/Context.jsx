import React, { createContext, useState } from "react";

export const UserContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", location: "Unknown" },
    { id: 3, name: "Ana Martin", location: "Classified" },
    { id: 1, name: "Ethan Hunt", location: "Classified" },
  ]);

  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
};

export default Context;

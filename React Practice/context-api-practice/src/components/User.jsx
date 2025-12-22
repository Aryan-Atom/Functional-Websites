import React from "react";

const User = ({ user }) => {
  const { name, location } = user;
  return (
    <div className="text-2xl text-pink-300 flex gap-8 mb-10 cp">
      <div>User : {name}</div>
      <div>Location : {location}</div>
    </div>
  );
};

export default User;

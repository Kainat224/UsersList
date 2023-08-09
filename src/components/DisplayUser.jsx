import React from "react";
import { useSelector } from "react-redux";

const DisplayUser = () => {
  const data = useSelector((state) => {
    return state.user;
  });
  return (
    <>
      {data.map((user, id) => {
        return <li key={id}>{user}</li>;
      })}
    </>
  );
};

export default DisplayUser;

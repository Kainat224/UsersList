import React from "react";
import { useDispatch } from "react-redux";
// import { clearAllUsers } from "../store/slices/UserSlice";
import { clearAllUsers } from "../store/actions";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  const deleteAllUsers = () => {
    dispatch(clearAllUsers());
  };
  return (
    <div>
      <button className="deleteUserBtn" onClick={() => deleteAllUsers()}>
        Delete All Users
      </button>
    </div>
  );
};

export default DeleteAllUsers;

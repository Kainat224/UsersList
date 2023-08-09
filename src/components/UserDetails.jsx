import React from "react";
import DeleteAllUsers from "./DeleteAllUsers";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import DisplayUser from "./DisplayUser";

function UserDetails() {
  const dispatch = useDispatch();
  const addNewUser = (fakeName) => {
    // console.log(fakeName);
    dispatch(addUser(fakeName));
  };
  return (
    <>
      <div className="wrapper">
        <div className="listStyle">
          <h2>List of user details</h2>
          <button
            className="addUserBtn"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add New Users
          </button>
        </div>
        <ul className="list">
          <DisplayUser />
        </ul>
        <hr />
        <DeleteAllUsers />
      </div>
    </>
  );
}

export default UserDetails;

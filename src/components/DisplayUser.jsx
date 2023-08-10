import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUser = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.user;
  });

  const deletUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <>
      {data.map((user, id) => {
        return (
          <>
            <li key={id} className="displayUsersList">
              {user}
              <button className="deleteItemBtn" onClick={() => deletUser(id)}>
                <AiFillDelete />
              </button>
            </li>
            <hr />
          </>
        );
      })}
    </>
  );
};

export default DisplayUser;

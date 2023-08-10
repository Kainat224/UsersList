import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
      // console.log("hii", action.payload);
    },
    // clearAllUsers(state, action) {
    //   // console.log("hi delete");
    //   return [];
    // },
  },

  extraReducers(builder) {
    // builder.addCase(userSlice.actions.clearAllUsers, () => {
    builder.addCase(clearAllUsers, () => {
      return [];
    });
  },
});

// console.log(userSlice.actions);
export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;

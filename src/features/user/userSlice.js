import {createSlice} from "@reduxjs/toolkit";

const initialState = []

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const {id, username, email} = action.payload;
      const userFound = state.find((user) => user.id === id);
      if(userFound) {
        userFound.username = username;
        userFound.email = email;
      }
    }
  }
});

export const {addUser, editUser} = userSlice.actions
export default userSlice.reducer
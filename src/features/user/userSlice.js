import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

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
    },
    deleteUser: (state, action) => {
      const foundUser = state.find((user) => user.id === action.payload);
      if(foundUser) {
        state.splice(state.indexOf(foundUser), 1);
      }
    }
  }
});

export const {addUser, editUser, deleteUser} = userSlice.actions
export default userSlice.reducer
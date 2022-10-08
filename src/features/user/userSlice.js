import {createSlice} from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    username: "John",
    email: "userjohn@gmail.com"
  }
]

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const {addUser} = userSlice.actions
export default userSlice.reducer
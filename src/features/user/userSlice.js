import {createSlice} from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    username: "John",
    email: "userjohn@gmail.com"
  },
  {
    id: "2",
    username: "George",
    email: "usergeorge@gmail.com"
  },
  {
    id: "3",
    username: "Paul",
    email: "userpaul@gmail.com"
  }
]

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    
  }
});

export const {addUser} = userSlice.actions
export default userSlice.reducer
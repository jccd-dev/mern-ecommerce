import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  isFetching: false,
  isError: {
    error: false,
    message: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.isError.error = false;
      state.isError.message = null;
      state.currentUser = action.payload;
    },
    loginFailiure: (state, action) => {
      state.isFetching = false;
      state.isError.error = true;
      state.isError.message = action.payload;
    },
    logout: () => initialState,
  },
});

export const { loginStart, loginSuccess, loginFailiure, logout } =
  userSlice.actions;
export default userSlice.reducer;

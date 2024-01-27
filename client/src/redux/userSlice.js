import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    isError: {
      error: false,
      message: null,
    },
  },
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
  },
});

export const { loginStart, loginSuccess, loginFailiure } = userSlice.actions;
export default userSlice.reducer;

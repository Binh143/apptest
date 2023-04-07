import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthResourceAPI from "api/authResource/AuthResourceAPI";

const initialState = {
  accessToken: "",
  refreshToken: "",
  id: "",
  username: "",
  email: "",
  name: "",
  avatar: "",
  loading: "",
};

const authSlice = () =>
  createSlice({
    initialState,
    reducers: {
      addToken: (state, action) => {
        state.accessToken = localStorage?.getItem("accessToken");
        state.refreshToken = localStorage?.getItem("refreshToken");
      },
      addUser: (state, action) => {
        state.username = localStorage?.getItem("username");
        state.email = localStorage?.getItem("email");
        state.avatar = localStorage?.getItem("avatar");
        state.id = localStorage?.getItem("id");
      },
      addSignOut: (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        localStorage.clear();
      },
    },
    extraReducer: {},
  });
// export const { addToken, addUser, addSignOut } = authSlice?.actions;
export default authSlice.reducer;

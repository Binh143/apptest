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
export const signInUser = (values) => {
  console.log("🚀 ~ file: authSlice.jsx:15 ~ signInUser ~ values:", values);
  return values;
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.accessToken = localStorage.getItem("accessToken");
      state.refreshToken = localStorage.getItem("refreshToken");
    },
    addUser: (state, action) => {
      state.username = localStorage.getItem("username");
      state.email = localStorage.getItem("email");
      state.avatar = localStorage.getItem("avatar");
      state.id = localStorage.getItem("id");
    },
    addSignOut: (state, action) => {
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.clear();
    },
  },
  extraReducer: {
    [signInUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signInUser.fulfilled]: (
      state,
      {
        payload: {
          error,
          accessToken,
          refreshToken,
          id,
          username,
          email,
          avatar,
        },
      }
    ) => {
      state.loading = false;
      if (error) {
        return (state.error = error);
      } else {
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.id = id;
        state.username = username;
        state.email = email;
        state.avatar = avatar;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("id", id);
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("avatar", avatar);
      }
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});
export const { addToken, addUser, addSignOut } = authSlice.actions;
export default authSlice.reducer;

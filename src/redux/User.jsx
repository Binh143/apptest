import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const SIGNIN = "signIn";
const initialState = {
  accessToken: "",
  refreshToken: "",
  id: "",
  username: "",
  email: "",
  name: "",
  avatar: "",
};

export const signInRD = (obj) => ({
  type: "SIGNIN",
  data: obj,
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        accessToken: action.data.accessToken,
        refreshToken: action.data.refreshToken,
        id: action.data.id,
        username: action.data.username,
        email: action.data.email,
        name: action.data.name,
        avatar: action.data.avatar,
      };

    default: {
      if (localStorage.getItem("accessToken")) {
        return {
          ...state,
          accessToken: localStorage.getItem("accessToken"),
          refreshToken: localStorage.getItem("refreshToken"),
          username: localStorage.getItem("username"),
          email: localStorage.getItem("email"),
          name: localStorage.getItem("name"),
          avatar: localStorage.getItem("avatar"),
        };
      }
      return state;
    }
  }
}
export default userReducer;

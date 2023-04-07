import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  accessToken: "",
  refreshToken: "",
  id: "",
  username: "",
  email: "",
  name: "",
  avatar: "",
};

export const user = () => ({
  type: "signIn",
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case signIn:
      return {
        ...state,
      };

    default:
      break;
  }
}
export default userReducer;

import Cookies from "universal-cookie";
import { createSlice } from "@reduxjs/toolkit";

const cookies = new Cookies();
const access_token = cookies.get('user_access_token');
const initialState = { userToken: access_token }

export const userAccessTokenSlice = createSlice({
  name: 'user-access-token-slice',
  initialState: initialState,
  reducers: {
    updateUserToken(status, action){
      status.userToken = action.payload;
    }
  }
});

export const userAccessTokenActions = userAccessTokenSlice.actions;

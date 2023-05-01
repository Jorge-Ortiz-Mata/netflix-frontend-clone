import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modal-slice";
import { userAccessTokenSlice } from "./user-access-token";
import { userRegistrationSlice } from "./user-registration.-slice";

export const store = configureStore({
  reducer: {
    userRegistration: userRegistrationSlice.reducer,
    userAccessToken: userAccessTokenSlice.reducer,
    modal: modalSlice.reducer
  }
});

import { configureStore } from "@reduxjs/toolkit";
import { userAccessTokenSlice } from "./user-access-token";
import { userRegistrationSlice } from "./user-registration.-slice";

export const store = configureStore({
  reducer: {
    userRegistration: userRegistrationSlice.reducer,
    userAccessToken: userAccessTokenSlice.reducer
  }
})

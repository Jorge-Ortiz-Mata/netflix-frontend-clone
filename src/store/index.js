import { configureStore } from "@reduxjs/toolkit";
import { userRegistrationSlice } from "./user-registration.-slice";

export const store = configureStore({
  reducer: {
    userRegistration: userRegistrationSlice.reducer
  }
})

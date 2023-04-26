import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: '',
  password: '',
  password_confirmation: ''
}

export const userRegistrationSlice = createSlice({
  name: 'user-registration-slice',
  initialState: initialState,
  reducers: {
    handleEmail(state, action){
      state.email = action.payload.value;
    },
    handlePassword(state, action){
      state.password = action.payload.value;
    },
    handlePasswordConfirmation(state, action){
      state.password_confirmation = action.payload.value;
    }
  }
});

export const userRegistrationActions = userRegistrationSlice.actions;

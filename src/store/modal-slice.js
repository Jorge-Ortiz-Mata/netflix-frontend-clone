import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: true,
  title: 'No title',
  description: 'No description'
}

export const modalSlice = createSlice({
  name: 'modal-slice',
  initialState: initialState,
  reducers: {
    toggleModal(state, action){
      state.showModal = !state.showModal;
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
    closeAndResetModal(state){
      state.showModal = !state.showModal;
      state.title = '';
      state.description = '';
    }
  }
})

export const modalActions = modalSlice.actions;

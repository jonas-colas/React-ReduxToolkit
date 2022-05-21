import { createSlice } from "@reduxjs/toolkit";

const uiToggleInitialState = {
  isCartOpen: false,
  notification: null,
};

const uiToggleSlice = createSlice({
  name: "uiToggle",
  initialState: uiToggleInitialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    }
  }
});

export const toggleActions = uiToggleSlice.actions;

export default uiToggleSlice.reducer;
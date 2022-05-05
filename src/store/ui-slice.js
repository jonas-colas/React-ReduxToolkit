import { createSlice } from "@reduxjs/toolkit";

const uiToggleInitialState = {
  isCartOpen: false,
};

const uiToggleSlice = createSlice({
  name: "uiToggle",
  initialState: uiToggleInitialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    }
  }
});

export const toggleActions = uiToggleSlice.actions;

export default uiToggleSlice.reducer;
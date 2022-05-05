import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart-slice';
import uiToggleReducer from './ui-slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    uiToggle: uiToggleReducer,
  },
});

export default store;
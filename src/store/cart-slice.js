import { createSlice } from "@reduxjs/toolkit"; 


const initialCartSlice = {
  products: [],
  qty: 0,
  subTotal: 0,
  total: 0,
  changed: false,
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartSlice,
  reducers: {
    replaceCart(state, action) {
      state.products = action.payload.products;
      state.qty = action.payload.qty;
      state.subTotal = action.payload.subTotal;
      state.total = action.payload.total;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const productInCart = state.products.find(p => p.id === product.id);
      state.changed = true;
      if (productInCart) {
        productInCart.quantity += 1;
        productInCart.subTotal = productInCart.quantity * productInCart.price;
      } else {
        state.products.push({ ...product, quantity: 1, subTotal: product.price });
      }
      state.qty += 1;
      // state.total += product.price;
      state.total = state.products.reduce((acc, p) => acc + p.subTotal, 0);
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const productInCart = state.products.find(p => p.id === product.id);
      state.changed = true;
      if (productInCart) {
        productInCart.quantity -= 1;
        productInCart.subTotal = productInCart.quantity * productInCart.price;
        if (productInCart.quantity === 0) {
          state.products = state.products.filter(p => p.id !== product.id);
        }
      }
      state.qty -= 1;
      state.total = state.products.reduce((acc, p) => acc + p.subTotal, 0);
    },
    removeAllProducts: (state) => {
      state.products = initialCartSlice.products;
      state.total = initialCartSlice.total;
    }
  }
});



export const cartActions = cartSlice.actions; 

export default cartSlice.reducer;
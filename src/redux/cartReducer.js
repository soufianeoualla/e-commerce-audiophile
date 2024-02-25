import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    totalPrice: 0,
    isShowing: false,
    notification:false
  },
  reducers: {
    addProducts: (state, action) => {
      state.quantity += action.payload.quantity;
      const { id } = action.payload[0];
      const isExisting = state.products.findIndex(
        (product) => product[0].id === id
      );
      if (isExisting !== -1) {
        state.products[isExisting].quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      state.totalPrice += action.payload[0].price * action.payload.quantity;
      state.notification = true
    },
    deleteProduct: (state, action) => {
      const { id } = action.payload[0];
      state.quantity -= action.payload.quantity;
      state.totalPrice -= action.payload[0].price * action.payload.quantity;
      state.products = state.products.filter((product) => product[0].id !== id);
    },
    quantityIncrement: (state, action) => {
      const productId = action.payload;
      const productToUpdate = state.products.find(
        (product) => product[0].id === productId
      );
      if (productToUpdate) {
        productToUpdate.quantity += 1;
        state.quantity += 1;
        state.totalPrice += productToUpdate[0].price;
      }
    },
    quantityDecrement: (state, action) => {
      const productId = action.payload;
      const productToUpdate = state.products.find(
        (product) => product[0].id === productId
      );
      if (productToUpdate && productToUpdate.quantity > 1) {
        productToUpdate.quantity -= 1;
        state.totalPrice -= productToUpdate[0].price;
        state.quantity -= 1;
      }
    },
    showCart: (state) => {
      state.isShowing = !state.isShowing;
    },
    removeAll: (state) => {
      state.products = [];
      state.quantity = 0;
      state.totalPrice = 0;
    },
    hideNotfication:(state)=>{
      state.notification =false
    }
   
  },
});

export const { addProducts, deleteProduct, quantityIncrement, quantityDecrement, showCart, removeAll,hideNotfication } = cartSlice.actions;


export default cartSlice.reducer;

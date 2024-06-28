import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  products: [],
  quantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addProducts: (state, action) => {
      state.quantity += action.payload.quantity;
      const { id } = action.payload;
      const isExisting = state.products.findIndex(
        (product) => product.id === id
      );
      if (isExisting !== -1) {
        state.products[isExisting].quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      const { id } = action.payload;
      state.quantity -= action.payload.quantity;
      state.totalPrice -= action.payload.price * action.payload.quantity;
      state.products = state.products.filter((product) => product.id !== id);
    },
    quantityIncrement: (state, action) => {
      const productId = action.payload;
      const productToUpdate = state.products.find(
        (product) => product.id === productId
      );
      if (productToUpdate) {
        productToUpdate.quantity += 1;
        state.quantity += 1;
        state.totalPrice += productToUpdate.price;
      }
    },
    quantityDecrement: (state, action) => {
      const productId = action.payload;
      const productToUpdate = state.products.find(
        (product) => product.id === productId
      );
      if (productToUpdate && productToUpdate.quantity > 1) {
        productToUpdate.quantity -= 1;
        state.totalPrice -= productToUpdate.price;
        state.quantity -= 1;
      }
    },

    removeAll: (state) => {
      state.products = [];
      state.quantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addProducts,
  deleteProduct,
  quantityIncrement,
  quantityDecrement,
  removeAll,
} = cartSlice.actions;

export default cartSlice.reducer;

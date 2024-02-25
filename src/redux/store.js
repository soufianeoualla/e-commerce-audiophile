import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import menuReducer from "./menuReducer";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        menu: menuReducer
    }
});

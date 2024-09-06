import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice";
import singleproductSlice from "./features/singleproductSlice";
import cartSlice from "./features/cartSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    product: singleproductSlice,
    cartItems: cartSlice,
  },
});

export default store;

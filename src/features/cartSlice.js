// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Helper function to load state from local storage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cartItems");
    if (serializedState === null) return []; // Return empty array if nothing in local storage
    return JSON.parse(serializedState); // Parse the string back into a JavaScript array
  } catch (e) {
    console.error("Could not load cart items", e);
    return []; // Return empty array in case of error
  }
};

// Helper function to save state to local storage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.cartItems); // Convert state to JSON string
    localStorage.setItem("cartItems", serializedState); // Save to local storage
  } catch (e) {
    console.error("Could not save cart items", e);
  }
};

// Initialize state with items loaded from local storage
const initialState = {
  cartItems: loadFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    // Add to cart reducer
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.qty += action.payload.qty || 1; // Update quantity if item exists
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 }); // Add new item with default qty 1
      }

      saveToLocalStorage(state); // Save updated state to local storage
    },

    // Remove from cart reducer
    removeCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      saveToLocalStorage(state); // Save updated state to local storage
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;

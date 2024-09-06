import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch a product by ID
export const fetchProductByID = createAsyncThunk(
  "products/fetchProductByID",
  async (id) => {
    const response = await fetch(`https://fake-coffee-api.vercel.app/api/${id}`);
    return response.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    product: null, // Updated: Change initial state from array to null if fetching a single product
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductByID.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductByID.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload; // Set the fetched product to the state
      })
      .addCase(fetchProductByID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

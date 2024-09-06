import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";

//fetching products (all products)
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://fake-coffee-api.vercel.app/api');
  return response.json();
  
})

// products slice

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
     builder.addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = false
     }).addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false,
        state.products = action.payload;
     }).addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
     })
    }
})

export default productsSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCart } from "../../services";

const fetchCart = createAsyncThunk("GET/cart", async () => {
  try {
    const response = await getCart();
    // console.log(response.data.data[0]);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {
  value: []
};
export const Cart = createSlice({
  name: "items",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.splice(0, state.value.length, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.value.splice(0, state.value.length, action.payload);
    });
  },
});
export const { add } = Cart.actions;
export default Cart.reducer;
export {fetchCart}
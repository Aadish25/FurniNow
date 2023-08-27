import {createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};
export const singleProduct = createSlice({
  name: "single",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.value.splice(0, state.value.length, action.payload);
    },
  },
});
export const { addProduct } = singleProduct.actions;
export default singleProduct.reducer;
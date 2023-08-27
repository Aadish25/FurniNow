import { createSlice } from "@reduxjs/toolkit";
import products from "../../components/shop/products";
export const Quantity = createSlice({
  name: "quantity",
  initialState: {
    qProducts: products,
  },
  reducers: {
    Increment: (state, action) => {
      for (let i = 0; i < state.qProducts.length; i++) {
        if (state.qProducts[i].id == action.payload) {
          state.qProducts[i].quantity++;
        }
      }
    },
    Decrement: (state, action) => {
      for (let i = 0; i < state.qProducts.length; i++) {
        if (state.qProducts[i].id == action.payload ) {
          if(state.qProducts[i].quantity>1)
          {
            state.qProducts[i].quantity--;
          }
          
        }
      }
    },
  },
});

export const { Increment,Decrement } = Quantity.actions;

export default Quantity.reducer;

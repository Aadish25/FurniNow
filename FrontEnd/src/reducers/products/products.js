import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../../services";


const fetchProducts = createAsyncThunk("GET/products", async () => {
  try {
    const response = await getProduct();
    // console.log("hi");
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});

export const Products = createSlice({
  name: "products",
  initialState: {
    value:[]
  },
  reducers: {
    list: (state, action) => {
      state.value.splice(0, state.value.length, ...action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      if(state.value.length>0)
      {
        return ;
      }
    state.value.push(...action.payload);
    });
  },
});

export const { list } = Products.actions;

export default Products.reducer;

export { fetchProducts };

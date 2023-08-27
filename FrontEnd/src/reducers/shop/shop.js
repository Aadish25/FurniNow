import { createSlice } from '@reduxjs/toolkit'
export const Shop = createSlice({
  name: 'page',
  initialState: {
    value: 1,
  },
  reducers: {
    handleFun:(state,action) => {
        // console.log(action.payload);
        state.value=action.payload
      }
  },
})

export const {handleFun} = Shop.actions

export default Shop.reducer
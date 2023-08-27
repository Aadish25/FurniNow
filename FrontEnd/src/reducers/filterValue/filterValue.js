import { createSlice } from '@reduxjs/toolkit'
export const FilterValue = createSlice({
  name: 'Filter',
  initialState: {
    value: 40,
  },
  reducers: {
    changeCount:(state,action) => {
        state.value=action.payload;
    },
    
  },
})

export const {changeCount} = FilterValue.actions

export default FilterValue.reducer
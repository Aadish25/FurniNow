import { createSlice } from '@reduxjs/toolkit'
export const Dialog = createSlice({
  name: 'open',
  initialState: {
    value: false,
  },
  reducers: {
    handleClickOpen: (state) => {
      state.value= !state.value
    },
    handleClose: (state) => {
      state.value= false
    },
  },
})

export const { handleClickOpen, handleClose } = Dialog.actions

export default Dialog.reducer
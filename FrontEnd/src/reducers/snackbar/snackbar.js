import { createSlice } from "@reduxjs/toolkit";
export const SnackBar = createSlice({
  name: "SnackBar",
  initialState: {
    open: false,
    message: "",
    severity: "",
  },
  reducers: {
    handleClick: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    handleClose: (state) => {
      state.open = false;
    },
  },
});

export const { handleClick, handleClose } = SnackBar.actions;

export default SnackBar.reducer;

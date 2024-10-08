import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { modalVisibility: false },
  reducers: {
    setModalVisibility(state) {
      state.modalVisibility = !state.modalVisibility;
    },
  },
});

export default modalSlice.reducer;
export const { setModalVisibility } = modalSlice.actions;

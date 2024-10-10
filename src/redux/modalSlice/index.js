import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { modalVisibility: false, hamburgerBtn: false },
  reducers: {
    setModalVisibility(state) {
      state.modalVisibility = !state.modalVisibility;
    },
    setHamburgerBtn(state) {
      state.hamburgerBtn = !state.hamburgerBtn;
    },
  },
});

export default modalSlice.reducer;
export const { setModalVisibility, setHamburgerBtn } = modalSlice.actions;

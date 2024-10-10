import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeImage: 0
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setActiveImage: (state, action) => {
      state.activeImage = action.payload;
    }
  }
});

export const { setActiveImage } = gallerySlice.actions;
export default gallerySlice.reducer;

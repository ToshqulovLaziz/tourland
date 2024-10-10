import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import modalReducer from "./modalSlice";
import galleryReducer from "./gallerySlice"

export const store = configureStore({
  reducer: {
    language: languageReducer,
    modal: modalReducer,
    gallery: galleryReducer
  },
});

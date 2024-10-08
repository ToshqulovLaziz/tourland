import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import modalSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    modal: modalSlice,
  },
});

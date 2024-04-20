import { homeReducer } from "./homeredux";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
    reducer: {homeReducer}
  });
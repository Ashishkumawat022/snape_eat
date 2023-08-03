import { configureStore } from "@reduxjs/toolkit";
import merchantRegistrationApiReducer from "../reducers/merchantRegistrationApiReducer";

export const Store = configureStore({
  reducer: {
    merchantRegistrationApiReducer: merchantRegistrationApiReducer,
  },
});

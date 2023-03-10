import { configureStore } from "@reduxjs/toolkit";
import cryptoSlice from "./cryptoSlice/cryptoSlice";

const store = configureStore({
  reducer: {
    cryptos: cryptoSlice,
  },
});

export default store;

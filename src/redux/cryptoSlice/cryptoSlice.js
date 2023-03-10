import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const COINGECKO_API_URL = process.env.NEXT_PUBLIC_COINGECKO_API_URL;
export const fetchCoins = createAsyncThunk("cryptos/fetchCoins", async () => {
  const response = await fetch(
    `${COINGECKO_API_URL}?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
  );
  const data = await response.json();
  return data;
});

const cryptoSlice = createSlice({
  name: "cryptos",
  initialState: {
    coins: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.coins = action.payload;
        state.loading = false;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default cryptoSlice.reducer;

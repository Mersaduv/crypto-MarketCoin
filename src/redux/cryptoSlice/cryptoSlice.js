// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// export const fetchCoins = createAsyncThunk("cryptos/fetchCoins", async (page) => {
//     const { data } = await axios.get(
//         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`
//     );

//     return data;
// });

// const cryptoSlice = createSlice({
//     name: "cryptos",
//     initialState: {
//         coins: [],
//         loading: false,
//         error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchCoins.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(fetchCoins.fulfilled, (state, action) => {
//                 state.coins = action.payload;
//                 state.loading = false;
//             })
//             .addCase(fetchCoins.rejected, (state, action) => {
//                 state.error = action.error.message;
//                 state.loading = false;
//             });
//     },
// });

// export default cryptoSlice.reducer;

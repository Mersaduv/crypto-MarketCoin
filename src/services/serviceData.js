import http from "./httpService";

// console.log(COINGECKO_API_URL);
// // Make a GET request to retrieve data
export const getData = () => {
  return http.get(
    `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`
  );
};

// //
export const getSomeData = (data) => {
  return http.get(
    `/coins/${data}`
  );
};

// // // You can add more functions here for other API requests
export const getExchanges = () => {
  return http.get(`/exchanges`);
};

export const getOneExchanges = (data) => {
  return http.get(`/exchanges/${data}`);
};

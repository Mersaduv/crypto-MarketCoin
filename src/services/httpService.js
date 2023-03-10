import axios from "axios";
const COINGECKO_API_URL = process.env.NEXT_PUBLIC_COINGECKO_API_URL;
axios.defaults.baseURL = COINGECKO_API_URL;

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
export default http;

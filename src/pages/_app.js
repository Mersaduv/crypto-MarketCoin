// import Layout from "@/src/Layout/Layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import Layout from "../Layout/Layout";
import store from "../redux/store";
// import { Provider } from "react-redux";
// import store from "../redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

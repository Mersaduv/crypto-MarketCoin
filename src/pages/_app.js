
import "@/styles/globals.css";
import { ColorContextProvider } from "@/theme/MUI_MODE";
import Head from "next/head";
import { Provider } from "react-redux";

import AuthProvider from "../context/AuthProvider";
import EnterStateProvider from "../context/enterState";
import WatchListContext from "../context/WatchListContext";
import WatchListContextNewCoin from "../context/WatchListContextNewCoin";
import WatchListNFT from "../context/WatchListNFT";
import 'react-toastify/dist/ReactToastify.css'; import Layout from "../Layout/Layout";
import store from "../redux/store";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  // const ToastComponent = withToast(Component);
  return (

    <>
      <Head>
        <title>MarketCoin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favLogo.ico" />
      </Head>

      <AuthProvider>
        <ColorContextProvider>

          <Provider store={store}>
            <WatchListContext>
              <WatchListContextNewCoin>
                <WatchListNFT>
                  <EnterStateProvider>
                    <Layout>

                      <Component {...pageProps} />
                      <ToastContainer />

                    </Layout>
                  </EnterStateProvider>
                </WatchListNFT>
              </WatchListContextNewCoin>
            </WatchListContext>
          </Provider>
        </ColorContextProvider>
      </AuthProvider>
    </>





  );
}

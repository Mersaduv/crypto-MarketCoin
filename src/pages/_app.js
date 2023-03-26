
import "@/styles/globals.css";
import { ColorContextProvider } from "@/theme/MUI_MODE";
import Head from "next/head";
import { Provider } from "react-redux";
import EnterStateProvider from "../context/enterState";
import WatchListContext from "../context/WatchListContext";
import WatchListContextNewCoin from "../context/WatchListContextNewCoin";
import WatchListNFT from "../context/WatchListNFT";


import Layout from "../Layout/Layout";
import store from "../redux/store";

export default function App({ Component, pageProps }) {
  return (

    <>
      <Head>
        <title>Crypto Nextjs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favLogo.ico" />
      </Head>

      <ColorContextProvider>
        <Provider store={store}>
          <WatchListContext>
            <WatchListContextNewCoin>
              <WatchListNFT>
                <EnterStateProvider>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </EnterStateProvider>
              </WatchListNFT>
            </WatchListContextNewCoin>
          </WatchListContext>
        </Provider>
      </ColorContextProvider>
    </>





  );
}

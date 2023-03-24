
import "@/styles/globals.css";
import { ColorContextProvider } from "@/theme/MUI_MODE";
import { Provider } from "react-redux";
import EnterStateProvider from "../context/enterState";
import WatchListContext from "../context/WatchListContext";
import WatchListContextNewCoin from "../context/WatchListContextNewCoin";


import Layout from "../Layout/Layout";
import store from "../redux/store";

export default function App({ Component, pageProps }) {
  return (
    <ColorContextProvider>
      <Provider store={store}>
        <WatchListContext>
          <WatchListContextNewCoin>
            <EnterStateProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>

            </EnterStateProvider>

          </WatchListContextNewCoin>


        </WatchListContext>

      </Provider>
    </ColorContextProvider>




  );
}

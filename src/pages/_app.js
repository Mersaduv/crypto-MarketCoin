
import "@/styles/globals.css";
import { ColorContextProvider } from "@/theme/MUI_MODE";
import { Provider } from "react-redux";
import EnterStateProvider from "../context/enterState";
import WatchListContext from "../context/WatchListContext";


import Layout from "../Layout/Layout";
import store from "../redux/store";

export default function App({ Component, pageProps }) {
  return (
    <ColorContextProvider>
      <Provider store={store}>
        <WatchListContext>
          <EnterStateProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>

          </EnterStateProvider>

        </WatchListContext>

      </Provider>
    </ColorContextProvider>




  );
}

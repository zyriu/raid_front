import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../app/shared/store/store";
import { Web3ContextProvider } from "../ui/components/web3/context";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Raid City</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/adn.png" />
      </Head>
      <Provider store={store}>
        <Web3ContextProvider>
          <Component {...pageProps} />
        </Web3ContextProvider>
      </Provider>
    </>
  );
}

export default MyApp;

import { Provider } from "react-redux";
import store from "../store/store";

import Head from "next/head";
import Layout from "../components/Layout/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <link rel="icon" href="/images/website__favicon.png" />
          <title>Gerícht - Luxury Restaurant</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

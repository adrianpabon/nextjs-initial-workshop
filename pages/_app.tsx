import type {AppProps} from "next/app";
import Page from "../components/Page";
import Head from "next/head";
import "../globals.css";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Adrian</title>
      </Head>

      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default App;
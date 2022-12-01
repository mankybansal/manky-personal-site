import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Mayank Bansal</title>
      <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
    </Head>

    <Component {...pageProps} />
    <Analytics />
  </>
);

export default App;

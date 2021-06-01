import "../styles/globals.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Mayank Bansal</title>
      <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;

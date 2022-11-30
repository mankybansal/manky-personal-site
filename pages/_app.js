import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Mayank Bansal</title>
      <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
    </Head>
    <Script
      src={`https://kit.fontawesome.com/2d64f5187c.js`}
      crossOrigin="anonymous"
      strategy="beforeInteractive"
    />
    <Script
      async
      src={"https://www.googletagmanager.com/gtag/js?id=UA-162415812-1"}
    />
    <Component {...pageProps} />
    <Analytics />
  </>
);

export default MyApp;

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap"
            rel="stylesheet"
          />
          <script
            src={`https://kit.fontawesome.com/2d64f5187c.js`}
            crossOrigin="anonymous"
          />
          <script defer type="text/javascript" src="/public/js/background.js" />
          <script defer type="text/javascript" src="/public/js/default.js" />
          <script src={"https://medium-widget.pixelpoint.io/widget.js"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

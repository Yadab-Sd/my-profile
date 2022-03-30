import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#cd103b" />
          {/* <link
            rel="preload"
            href="/fonts/UniNeue/UniNeue-Regular.woff2"
            as="font"
            crossOrigin=""
          /> */}
          {/* <link
            rel="preload"
            href="//db.onlinewebfonts.com/t/c3f5dae3a88e0c25c932d7108cc9f05b.eot"
            as="font"
            crossOrigin=""
          /> */}
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/favicon/apple-touch-icon-192x192.png"
          />
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

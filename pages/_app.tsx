import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, useEffect } from "react";
import { NextPage } from "next";

type DefaultLayoutType = ({
  children,
}: {
  children: ReactElement;
}) => ReactElement;

type Page<P = {}> = NextPage<P> & {
  Layout: DefaultLayoutType;
};

type Props = AppProps & {
  Component: Page;
};

const DefaultLayout: DefaultLayoutType = ({
  children,
}: {
  children: ReactElement;
}) => <>{children}</>;

function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.Layout || DefaultLayout;

  useEffect(() => {
    document.body.classList.remove("loading");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

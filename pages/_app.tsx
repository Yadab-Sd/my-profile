import "@styles/globals.css";
import type { AppProps } from "next/app";
import React, { ReactElement, useEffect, useRef } from "react";
import { NextPage } from "next";
import { AnimatePresence } from "framer-motion";
import SmoothScroll from "@common/SmoothScroll";

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
  const scrollingContainer = useRef();

  useEffect(() => {
    document.body.classList.remove("loading");
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <SmoothScroll>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SmoothScroll>
    </AnimatePresence>
  );
}

export default MyApp;

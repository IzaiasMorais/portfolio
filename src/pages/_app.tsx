import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Head from "next/head";

import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="app">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <main>
        <NextNProgress color="#D100FF" />
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;

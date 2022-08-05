import type { AppProps } from "next/app";
import "@/styles/app.scss";
import "@/styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

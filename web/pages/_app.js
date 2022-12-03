import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="/scripts/flowbite.js"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

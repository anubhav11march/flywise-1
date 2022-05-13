import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { extendTheme } from "@chakra-ui/react";
import Parentt from "../content/parent";
import { useRouter } from "next/router";
import Head from 'next/head'
import * as gtag from "../utils/gtag";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
    
  },
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Parentt>
      <ChakraProvider theme={theme}>
      <Head>
        
      </Head>
        <Component {...pageProps} />{" "}
      </ChakraProvider>
    </Parentt>
  );
}

export default MyApp;

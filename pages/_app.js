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
  const f1=function(w,d,s,c,r,a,m){
      w['KiwiObject']=r;
      w[r]=w[r] || function () {
        (w[r].q=w[r].q||[]).push(arguments)};
      w[r].l=1*new Date();
        a=d.createElement(s);
        m=d.getElementsByTagName(s)[0];
      a.async=1;
      a.src=c;
      m.parentNode.insertBefore(a,m)
    }
  useEffect(()=>{
    f1(window,document,'script',"https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v="+ new Date().getTime(),'kiwi');
    window.onload = function () {
      kiwi.init('', 'LP7F9ShyeNKtVN0u8HV4GJLWyzSfloKB', {});
    }
  },[]);
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

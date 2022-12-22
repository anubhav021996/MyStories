import "../styles/globals.css";
import Layout from "../comps/layout";
import {ChakraProvider} from "@chakra-ui/react"
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [token,setToken]= useState("");

  useEffect(()=>{
    setToken(localStorage.getItem("token") || "");
  },[]);

  return (
    <ChakraProvider>
      <Layout token={token} setToken={setToken}>
        <Component {...pageProps} setToken={setToken} token={token} />
      </Layout>
    </ChakraProvider>
  );
}

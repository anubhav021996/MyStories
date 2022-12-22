import "../styles/globals.css";
import Layout from "../comps/layout";
import {ChakraProvider} from "@chakra-ui/react"
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [token,setToken]= useState("");

  useEffect(()=>{
    setToken(JSON.parse(localStorage.getItem("token2")) || "");
    console.log(token);
  },[]);

  return (
    <ChakraProvider>
      <Layout token={token}>
        <Component {...pageProps} setToken={setToken} />
      </Layout>
    </ChakraProvider>
  );
}

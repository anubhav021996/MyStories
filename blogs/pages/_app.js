import "../styles/globals.css";
import Layout from "../comps/layout";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SearchResults from "../comps/searchResults";

export default function App({ Component, pageProps }) {
  const [token, setToken] = useState("");
  const [search, setSearch] = useState([]);
  console.log("app.js", search);

  const clearSearch = () => {
    setSearch([]);
  };

  const handleSearchData = (data) => {
    setSearch(data);
  };

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, [search]);

  return (
    <ChakraProvider>
      <Layout
        token={token}
        setToken={setToken}
        handleSearchData={handleSearchData}
      >
        {search.length && (
          <SearchResults data={search} clearSearch={clearSearch} />
        )}
        <Component {...pageProps} setToken={setToken} token={token} />
      </Layout>
    </ChakraProvider>
  );
}

import Header from "./header.js";
import Footer from "./footer.js";
import { useState } from "react";
import SearchResults from "./searchResults.js";

const Layout = ({ children, token, setToken, handleSearchData }) => {
  return (
    <>
      <Header
        token={token}
        setToken={setToken}
        setSearchData={handleSearchData}
      />
      {/* {search.length > 0 && <SearchResults data={search} />} */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;

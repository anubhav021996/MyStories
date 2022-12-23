import Header from "./header.js";
import Footer from "./footer.js";

const Layout = ({ children, token, setToken, handleSearchData }) => {
  return (
    <>
      <Header
        token={token}
        setToken={setToken}
        setSearchData={handleSearchData}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

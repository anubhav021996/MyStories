import Header from "./header.js";
import Footer from "./footer.js";

const Layout = ({ children, token, setToken}) => {
  return (
    <>
      <Header token={token} setToken={setToken} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

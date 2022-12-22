import Header from "./header.js";
import Footer from "./footer.js";

const Layout = ({ children, token}) => {
  return (
    <>
      <Header token={token} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

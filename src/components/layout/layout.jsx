import PropsType from "prop-types";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  children: [],
};

Layout.propTypes = {
  children: PropsType.array,
};

export default Layout;

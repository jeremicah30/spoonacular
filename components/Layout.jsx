import Nav from "./Nav";
import layoutStyles from "../styles/components/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.main}>
      <Nav />
      {children}
    </div>
  );
};
export default Layout;

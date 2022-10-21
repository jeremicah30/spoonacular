import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="mainLayout">
      <Nav />
      {children}
    </div>
  );
};
export default Layout;

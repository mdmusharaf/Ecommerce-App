import { Outlet } from "react-router-dom";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
const Layout = ({ count }) => {
  return (
    <>
      <Header count={count} />
      <Outlet />
    </>
  );
};

export default Layout;

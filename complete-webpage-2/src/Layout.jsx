import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

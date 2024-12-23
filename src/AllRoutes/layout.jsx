import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/navigation/Footer";
import Header from "../components/navigation/Header";

const Layout = () => {
  return (
    <>
       <Header />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default Layout;

import { Outlet, ScrollRestoration } from "react-router-dom";
//import Footer from "../components/shared/Footer";
//import Header from "../components/shared/Header";

const Layout = () => {
  return (
    <>
    <Outlet />
    <ScrollRestoration />   
    </>
  );
};

export default Layout;
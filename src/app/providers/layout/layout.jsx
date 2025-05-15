import Footer from "@shared/ui/footer";
import Header from "@shared/ui/header";
import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

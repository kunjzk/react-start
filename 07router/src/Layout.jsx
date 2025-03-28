import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> This is provided by react router
      <Footer />
    </>
  );
}

export default Layout;

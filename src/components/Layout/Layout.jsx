import React from "react";
import { Outlet } from "react-router-dom";
import Main from "../Main/Main";

function Layout() {
  return (
    <>
      <Header />
      <Main />
      <Outlet />
    </>
  );
}

export default Layout;

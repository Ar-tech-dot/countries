import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => (
  <>
    <Header />
    <main className="container main">
      <Outlet />
    </main>
    <footer></footer>
  </>
);
export default Layout;

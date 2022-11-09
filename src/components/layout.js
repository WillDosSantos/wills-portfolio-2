import * as React from "react";
import { Link } from "gatsby";
import Sidebar from "../components/sidebar";
import "../styles/main.scss";
import "../styles/global.scss";


const Layout = ({ pageTitle, children, tagline }) => {
  return (
    <div className="layout-wrapper">
      <Sidebar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;

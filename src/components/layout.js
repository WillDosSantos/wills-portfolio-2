import * as React from "react";
import { Link } from "gatsby";
import Sidebar from "../components/sidebar";
import Navigation from "../components/navigation";
import "../styles/global.scss";
import "../styles/main.scss";



const Layout = ({ pageTitle, children, tagline }) => {
  return (
    <div className="layout-wrapper">
      <Sidebar />
      <main>
        <Navigation/>
        {children}
      </main>
    </div>
  );
};

export default Layout;

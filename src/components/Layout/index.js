import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import Footer from "../Footer";

import "./styles.css";

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <Topbar />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

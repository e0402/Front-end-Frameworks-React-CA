import React from "react";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/StyledFooter";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
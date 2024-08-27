import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Main content area */}
      <main className="flex-grow pt-[64px]">
        {" "}
        {/* Add padding to avoid overlapping with the fixed header */}
        <Outlet />
      </main>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

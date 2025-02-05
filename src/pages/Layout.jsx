import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <main className="content-container">
        <Outlet /> {/* Здесь рендерится текущая страница (Profile или Tasks) */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
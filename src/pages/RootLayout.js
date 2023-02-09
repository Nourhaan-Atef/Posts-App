import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <div className="h-full bg-veryDarkVioletMain">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;

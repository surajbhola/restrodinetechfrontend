import React from "react";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";
const DashboardRootLayout = () => {
  return (
    <div>
      <Dashboard>
        {
      <Outlet></Outlet>
        }
      </Dashboard>
    </div>
  );
};

export default DashboardRootLayout;

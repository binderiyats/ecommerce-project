import { Outlet } from "react-router-dom";
import { Navbar } from "../admin/components/Navbar";
import { Sidebar } from "../admin/components/Sidebar";

export const PrivateLayout = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

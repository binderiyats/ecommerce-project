import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../admin/components/Navbar";
import { Sidebar } from "../admin/components/Sidebar";
import { UserContext } from "../contexts/UserContext";

export const PrivateLayout = () => {
  const { user } = useContext(UserContext);

  console.log(user);

  if (!user || (user.role !== "Admin" && user.role !== "Moderator")) {
    return <Navigate to="/" />;
  }

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

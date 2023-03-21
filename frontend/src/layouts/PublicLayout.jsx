import { Outlet } from "react-router-dom";
import { Footer } from "../components/global/Footer";
import { Navbar } from "../components/global/Navbar";

export const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export const MainLayout = () => {
  return (
    <div className="bg-blue-50 w-full min-h-screen">
      <div className="fixed top-0 left-0 z-20 w-full">
        <NavBar />
      </div>
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
};

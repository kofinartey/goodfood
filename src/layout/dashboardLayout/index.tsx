import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { SidePanel } from "./components/SidePanel";

export function DashboardLayout() {
  return (
    <div className="flex ">
      <SidePanel />
      <div className="w-full">
        <Navbar />
        <div className="dashboard-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

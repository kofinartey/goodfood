import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { SidePanel } from "./components/SidePanel";

export function Dashboard() {
  return (
    <div className="flex ">
      <SidePanel />
      <div className="w-full ">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

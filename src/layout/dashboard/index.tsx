import { Navbar } from "./components/Navbar";
import { SidePanel } from "./components/SidePanel";

export function Dashboard() {


  return (
    <div className="flex">
      <SidePanel />
      <div className="">
        <Navbar />
        <div>main</div>
      </div>
    </div>
  );
}

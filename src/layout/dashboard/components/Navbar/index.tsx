import { Search } from "./components/Search";

export function Navbar() {
  return (
    <div className="flex h-[65px] w-full border-b-1 border-b-[#C8CBD9] [mx-1] justify-between p-4 border-b border-[#C8CBD9] lg:px-8">
      <Search />
      <div>User and Notifications</div>
    </div>
  );
}

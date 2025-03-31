import { Search } from "./components/Search";

export function Navbar() {
  return (
    <div className="flex w-full bg-red-200 justify-between p-4 border-b border-[#C8CBD9]">
      <Search />
      <div>User and Notifications</div>
    </div>
  );
}

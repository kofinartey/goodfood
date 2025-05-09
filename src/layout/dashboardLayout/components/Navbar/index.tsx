import { Notifications } from "./components/Notifications";
import { Search } from "./components/Search";
import { UserAvatar } from "./components/UserAvatar";

export function Navbar() {
  return (
    <div className="flex h-[65px] w-full border-b-1 border-b-[#C8CBD9] [mx-1] justify-between p-4 border-[#C8CBD9] lg:px-8">
      <Search />
      <div className="flex  items-center lg:gap-5">
        <UserAvatar />
        <Notifications />
      </div>
    </div>
  );
}

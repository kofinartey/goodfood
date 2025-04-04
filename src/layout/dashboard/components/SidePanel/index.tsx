import {
  CartIcon,
  DocumentIcon,
  InfoIcon,
  MessageIcon,
  ProfileIcon,
  StatsIcon,
  SettingsIcon,
  WalletIcon,
} from "../../../../assets/icons";
import { SidePanelItem } from "./components/SidePanelItem";

export function SidePanel() {
  // TODO:
  // move data into hook
  const menuList = [
    {
      href: "",
      label: "Dashboard",
      icon: <StatsIcon />,
    },
    { href: "food-order", label: "Food Order", icon: <CartIcon /> },
    { href: "manage-menu", label: "Manage Menu", icon: <DocumentIcon /> },
    {
      href: "customer-review",
      label: "Customer Review",
      icon: <MessageIcon />,
    },
  ];

  const othersList = [
    { href: "settings", label: "Settings", icon: <SettingsIcon /> },
    { href: "payment", label: "Payment", icon: <WalletIcon /> },
    { href: "accounts", label: "Accounts", icon: <ProfileIcon /> },
    { href: "help", label: "Help", icon: <InfoIcon /> },
  ];

  return (
    <div className="block w-[80px] bg-[#F1F2F7] h-screen text-[#08243150] lg:w-[240px]">
      <div>
        {/* LOGO */}
        <div className="border-b-1 border-b-[#C8CBD9]">
          <div className="h-[64px] mx-2  flex items-center justify-center lg:justify-start lg:mx-10">
            <div className="h-5 w-5 mr-2 bg-[#5A67BA] rounded-full text-white text-xs flex items-center justify-center">
              <h2>G</h2>
            </div>
            <h2 className="hidden text-[#5A67BA] font-bold text-xs lg:block ">
              GOODFOOD
            </h2>
          </div>
        </div>

        <div className=" mx-10 mt-8 mb-4 text-xs opacity-0 lg:opacity-100">
          <h2>MENU</h2>
        </div>

        {menuList.map((item) => (
          <SidePanelItem item={item} key={item.href} />
        ))}

        <div className="mx-10 mt-8 mb-4 text-xs opacity-0 lg:opacity-100">
          <h2>OTHERS</h2>
        </div>

        {othersList.map((item) => (
          <SidePanelItem item={item} key={item.href} />
        ))}
      </div>
    </div>
  );
}

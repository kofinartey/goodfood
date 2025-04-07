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
  const menuList = [
    {
      href: "",
      label: "Dashboard",
      testId: "dashboard",
      icon: <StatsIcon />,
    },
    {
      href: "food-order",
      label: "Food Order",
      testId: "food-order",
      icon: <CartIcon />,
    },
    {
      href: "manage-menu",
      label: "Manage Menu",
      testId: "manage-menu",
      icon: <DocumentIcon />,
    },
    {
      href: "customer-review",
      label: "Customer Review",
      testId: "customer-review",
      icon: <MessageIcon />,
    },
  ];

  const othersList = [
    {
      href: "settings",
      label: "Settings",
      testId: "settings",
      icon: <SettingsIcon />,
    },
    {
      href: "payment",
      label: "Payment",
      testId: "payment",
      icon: <WalletIcon />,
    },
    {
      href: "accounts",
      label: "Accounts",
      testId: "accounts",
      icon: <ProfileIcon />,
    },
    { href: "help", label: "Help", testId: "help", icon: <InfoIcon /> },
  ];

  return (
    <div className="block w-[60px] bg-[#F1F2F7] h-screen text-[#08243150] lg:w-[240px]">
      <div>
        {/* LOGO */}
        <div className="border-b-1 border-b-[#C8CBD9]">
          <div className="h-[64px] mx-2  flex items-center justify-center lg:justify-start lg:mx-10">
            <div className="h-5 w-5 mr-2 bg-[#5A67BA] rounded-full text-white text-xs flex items-center justify-center">
              <p>G</p>
            </div>
            <p className="hidden text-[#5A67BA] font-bold text-xs lg:block ">
              GOODFOOD
            </p>
          </div>
        </div>

        <div className=" mx-10 mt-8 mb-4 text-xs hidden lg:block lg:opacity-100">
          <p>MENU</p>
        </div>

        {menuList.map((item) => (
          <SidePanelItem item={item} key={item.href} />
        ))}

        <div className="mx-10 mt-8 mb-4 text-xs hidden lg:block lg:opacity-100">
          <p>OTHERS</p>
        </div>

        {othersList.map((item) => (
          <SidePanelItem item={item} key={item.href} />
        ))}
      </div>
    </div>
  );
}

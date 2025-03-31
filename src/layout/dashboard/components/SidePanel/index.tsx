import { Link } from "react-router";

type PanelItem = {
  label: string;
  icon: string;
  href: string;
};

export function SidePanel() {
  const menuList = [
    {
      href: "dashboard",
      label: "Dashboard",
      icon: "",
    },
    { href: "food-order", label: "Food Order", icon: "" },
    { href: "manage-menu", label: "Manage Menu", icon: "" },
    { href: "customer-review", label: "Customer Review", icon: "" },
  ];

  const othersList = [
    { href: "settings", label: "Settings", icon: "" },
    { href: "payment", label: "Payment", icon: "" },
    { href: "accounts", label: "Accounts", icon: "" },
    { href: "help", label: "Help", icon: "" },
  ];

  return (
    <div className="w-[240px] bg-[#F1F2F7] h-screen text-[#08243150]">
      <div>
        <div className="p">LOGO</div>

        <div className=" mx-10 my-4">
          <h2>MENU</h2>
        </div>

        {menuList.map((item) => (
          <SidePanelItem item={item} />
        ))}

        <div className=" mx-10 my-4">
          <h2>OTHERS</h2>
        </div>

        {menuList.map((item) => (
          <SidePanelItem item={item} />
        ))}
      </div>
    </div>
  );
}

function SidePanelItem({ item }: { item: PanelItem }) {
  // get active from url
  return (
    <div className="mx-4 rounded-lg hover:bg-[#707FDD10]">
      <div key={item.href} className="flex items-center py-4 px-6">
        <div className="h-[15px] w-[15px] bg-amber-400 mr-4"></div>
        <Link to={item.href} className="text-sm">
          {item.label}
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router";
import { PanelItem } from "../../types";
import { useSidePaneItem } from "./hooks/useSidePanelItem";

export function SidePanelItem({ item }: { item: PanelItem }) {
  const {
    data: { isActive },
  } = useSidePaneItem({ href: item.href });

  return (
    <div
      className={`${
        isActive ? "bg-[#707FDD10]" : ""
      } rounded-lg hover:bg-[#707FDD10] mx-2 lg:mx-4 `}
    >
      <Link to={item.href} className="text-sm">
        <div className="flex items-center py-4 px-6">
          <div className="mr-4">{item.icon}</div>
          <span className="hidden lg:block">{item.label}</span>
        </div>
      </Link>
    </div>
  );
}

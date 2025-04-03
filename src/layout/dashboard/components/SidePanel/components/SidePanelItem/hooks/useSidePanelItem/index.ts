import { useLocation } from "react-router";

type UseSidePanelItem = {
  href: string;
};

type Result = {
  data: { isActive: boolean };
};

export function useSidePaneItem({ href }: UseSidePanelItem): Result {
  const location = useLocation();
  const isActive = location.pathname === `/${href}`;

  return { data: { isActive } };
}

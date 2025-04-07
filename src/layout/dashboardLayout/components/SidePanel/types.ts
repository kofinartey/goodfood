import { ReactNode } from "react";

export type PanelItem = {
  label: string;
  testId: string;
  icon: ReactNode;
  href: string;
};

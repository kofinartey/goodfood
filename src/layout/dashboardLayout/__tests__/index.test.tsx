import { render, screen } from "@testing-library/react";
import { DashboardLayout } from "../index";

describe("Dashboard", () => {
  test("should do something", () => {
    render(<DashboardLayout />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { Dashboard } from "../index";

describe("Dashboard", () => {
  test("should do something", () => {
    render(<Dashboard />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});

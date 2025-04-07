import { axe } from "jest-axe";
import { RevenueSection } from "..";
import { renderer } from "../../../../../shared/test-helpers/render";

describe("RevenueSection", () => {
  it("should not report accessibility violations", async () => {
    const { container } = renderer(<RevenueSection />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("displays a summary", () => {
    const { getByTestId, getByRole } = renderer(<RevenueSection />);
    expect(getByTestId("revenue-summary")).toBeInTheDocument();
    expect(getByRole("heading", { name: "Revenue" })).toBeInTheDocument();
  });

  it("displays a revenue chart", () => {
    const { getByTestId } = renderer(<RevenueSection />);
    expect(getByTestId("revenue-chart")).toBeInTheDocument();
  });
});

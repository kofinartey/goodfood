import { DashboardLayout } from "../index";
import { renderer } from "../../../shared/test-helpers/render";

describe("Dashboard", () => {
  test("should do something", () => {
    const { getByText } = renderer(<DashboardLayout />);
    expect(getByText("Dashboard")).toBeInTheDocument();
  });
});

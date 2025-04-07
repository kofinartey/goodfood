import { axe } from "jest-axe";
import { renderer } from "../../../../../shared/test-helpers/render";
import { Navbar } from "../index";

describe("Navbar", () => {
  it("should not report accessibility violations", async () => {
    const { container } = renderer(<Navbar />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it("should render the search component", () => {
    const { getByPlaceholderText } = renderer(<Navbar />);

    expect(getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("should render the notifications button", () => {
    const { getByRole } = renderer(<Navbar />);

    expect(getByRole("button", { name: "Notifications button" })).toBeInTheDocument();
  });
});

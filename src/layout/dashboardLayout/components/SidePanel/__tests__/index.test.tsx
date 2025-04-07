import { SidePanel } from "..";
import { axe } from "jest-axe";
import { renderer } from "../../../../../shared/test-helpers/render";

describe("SidePanel", () => {
  it("should not have accessibility violations", async () => {
    const { container } = renderer(<SidePanel />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it("displays the logo", () => {
    const { getByText } = renderer(<SidePanel />);
    expect(getByText(/GOODFOOD/)).toBeInTheDocument();
  });

  it("renders the right links", () => {
    const { getByText } = renderer(<SidePanel />);

    expect(getByText(/Dashboard/)).toBeInTheDocument();
    expect(getByText(/Food Order/)).toBeInTheDocument();
    expect(getByText(/Manage Menu/)).toBeInTheDocument();
    expect(getByText(/Customer Review/)).toBeInTheDocument();
    expect(getByText(/Settings/)).toBeInTheDocument();
    expect(getByText(/Payment/)).toBeInTheDocument();
    expect(getByText(/Accounts/)).toBeInTheDocument();
    expect(getByText(/Help/)).toBeInTheDocument();
  });
});

import { axe } from "jest-axe";
import { RatingSection } from "..";
import { renderer } from "../../../../../shared/test-helpers/render";

describe("Rating Section", () => {
  it("should not report accessibility violations", async () => {
    const { container } = renderer(<RatingSection />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("displays the appropriate copy", () => {
    const { getByRole, getByText } = renderer(<RatingSection />);

    expect(getByRole("heading", { name: "Your Rating" })).toBeInTheDocument();
    expect(getByText(/Hygiene/)).toBeInTheDocument()
    expect(getByText(/Food Taste/)).toBeInTheDocument()
    expect(getByText(/Packaging/)).toBeInTheDocument()
  });
});

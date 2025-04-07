import "@testing-library/jest-dom";

import { toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
Object.defineProperty(globalThis, "ResizeObserver", {
  writable: true,
  configurable: true,
  value: ResizeObserver,
});

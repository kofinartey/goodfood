import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router";

function renderer(
  component: React.ReactNode,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(component, { wrapper: BrowserRouter, ...options });
}

export * from "@testing-library/react";
export { renderer };

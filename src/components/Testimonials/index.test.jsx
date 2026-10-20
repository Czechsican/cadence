import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import Testimonials from "./";

vi.mock("./Testimonials.module.css", () => ({
  default: new Proxy(
    {},
    { get: (_targer, prop) => prop },
  ),
}))

describe("<Testimonials />", () => {
  const defaultComponent = <Testimonials />;

  it("should match snapshot", () => {
    const {container} = render(defaultComponent);
    expect(container).toMatchSnapshot();
  });
});
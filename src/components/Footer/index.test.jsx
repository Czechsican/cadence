import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import Footer from "./";

vi.mock("./Footer.module.css", () => ({
  default: new Proxy(
    {},
    { get: (_targer, prop) => prop },
  ),
}))

describe("<Footer />", () => {
  const defaultComponent = <Footer />;

  it("should match snapshot", () => {
    const {container} = render(defaultComponent);
    expect(container).toMatchSnapshot();
  });
});
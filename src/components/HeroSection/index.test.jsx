import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import HeroSection from "./";

vi.mock("./HeroSection.module.css", () => ({
  default: new Proxy(
    {},
    { get: (_targer, prop) => prop },
  ),
}))

describe("<HeroSection />", () => {
  const defaultComponent = <HeroSection />;

  it("should match snapshot", () => {
    const {container} = render(defaultComponent);
    expect(container).toMatchSnapshot();
  });
});
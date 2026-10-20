import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import SiteNav from "./index";

vi.mock("./SiteNav.module.css", () => ({
  default: new Proxy(
    {},
    { get: (_target, prop) => prop },
  ),
}));

describe("<SiteNav />", () => {
  it("Should match snapshot", () => {
    const {container} = render(<SiteNav />);
    expect(container).toMatchSnapshot();
  })
})
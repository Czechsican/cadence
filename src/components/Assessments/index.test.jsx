import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import Assessments from "./";

vi.mock("./Assessments.module.css", () => ({
  default: new Proxy(
    {},
    { get: (_targer, prop) => prop },
  ),
}))

describe("<Assessments />", () => {
  const defaultComponent = <Assessments />;

  it("should match snapshot", () => {
    const {container} = render(defaultComponent);
    expect(container).toMatchSnapshot();
  });
});
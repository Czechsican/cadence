import { describe, it, expect, vi } from "vitest";
import { render,screen } from "@testing-library/react";
import CornerTab from "./";

vi.mock("./CornerTab.module.css", () => ({
  default: new Proxy({}, { get: (_targer, prop) => prop }),
}));

describe("<CornerTab />", () => {
  const defaultComponent = <CornerTab />;

  it("renders component without crashing using defaults", () => {
    const {container} = render(defaultComponent);
    expect(screen.getByText("Corner Tab")).toBeInTheDocument();
    expect(container.querySelector(".cornerTab")).toBeInTheDocument();
  });

  it("renders component with .alt when passed altColor prop", () => {
    const {container} = render(<CornerTab altColor={true} />);
    expect(container.querySelector(".alt")).toBeInTheDocument();
  });

  it("renders component with .marginBottom when passed marginBottom prop", () => {
    const {container} = render(<CornerTab marginBottom={true} />);
    expect(container.querySelector(".marginBottom")).toBeInTheDocument();
  });
})
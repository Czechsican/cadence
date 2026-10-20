import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonLink from "./index";

vi.mock("./Button.module.css", () => ({
  default: new Proxy(
    {},
    { get: (_target, prop) => prop },
  ),
}));

describe("<ButtonLink />", () => {
  const defaultButton = <ButtonLink />;

  it("should render defaults without crashing", () => {
    render(defaultButton);
    expect(screen.getByText("Button Text")).toBeInTheDocument();
  })
  it("should render custom button text", () => {
    render(<ButtonLink label="Custom Text!" />);
    expect(screen.getByText("Custom Text!")).toBeInTheDocument();
  })
  it("Should render primary button", () => {
    const {container} = render(defaultButton);
    expect(container.querySelector(".btn.primary"));
  })
  it("Should render secondary button", () => {
    const {container} = render(<ButtonLink variant="secondary" />);
    expect(container.querySelector(".btn.secondary")).toBeInTheDocument();
  })
  it("Should render type = link", () => {
    const {container} = render(<ButtonLink href="/#" />);
    expect(container.querySelector(".link")).toBeInTheDocument();
  })
  it("forwards onClick on a button", () => {
    const onClick = vi.fn();
    render(<ButtonLink label="Go" onClick={onClick} />);
    fireEvent.click(screen.getByText("Go"));
    expect(onClick).toHaveBeenCalledTimes(1);
  })
  it("forwards onClick on a link", () => {
    const onClick = vi.fn();
    render(<ButtonLink label="Go" href="#" onClick={onClick} />);
    fireEvent.click(screen.getByText("Go"));
    expect(onClick).toHaveBeenCalledTimes(1);
  })
})

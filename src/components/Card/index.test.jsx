import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "./";

vi.mock("./Card.module.css", () => ({
  default: new Proxy({}, { get: (_targer, prop) => prop }),
}));

describe("<Card />", () => {
  const defaultComponent = <Card />;

  const custom = {
    cardImg: {
      id: "speaking",
      alt: "Speaking",
    },
    cardLabel: "Speaking",
    cardTitle: "Learn to change.",
    cardCopy:
      "ive your people the opportunity to learn and grow so they can maximize their abilities and make a positive difference every day.",
    cardLink: {
      src: "#",
      text: "Speaking Engagments",
    },
  };

  it("renders component without crashing using defaults", () => {
    const { container } = render(defaultComponent);
    expect(screen.getByText("Default Card Title")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Psychology-based coaching built for senior leaders navigating real pressure.",
      ),
    );
    expect(container.querySelector(".tall")).not.toBeInTheDocument();
  });

  it("renders the tall varient when passed tall prop", () => {
    const { container } = render(<Card tall />);
    expect(container.querySelector(".tall")).toBeInTheDocument();
  });

  it("renders with card label when passed CardLabel prop", () => {
    const { container } = render(<Card cardLabel={"Test"} />);
    expect(container.querySelector(".cardLabel")).toBeInTheDocument();
  });

  it("renders with link when passed cardLink props", () => {
    const linkProps = {
      src: "#",
      text: "Demo Link",
    };

    const { container } = render(<Card cardLink={linkProps} />);
    expect(container.querySelector(".cardLink")).toBeInTheDocument();
  });

  it("renders component with custom inputs", () => {
    render(<Card {...custom} />);
    expect(screen.getByText(custom.cardLabel)).toBeInTheDocument();
    expect(screen.getByText(custom.cardTitle)).toBeInTheDocument();
    expect(screen.getByText(custom.cardCopy)).toBeInTheDocument();
    expect(screen.getByText(custom.cardLink.text)).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<Card {...custom} />);
    expect(container).toMatchSnapshot();
  });
});

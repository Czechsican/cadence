import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Band from "./index";

vi.mock("./Band.module.css", () => ({
    default: new Proxy(
    {},
    { get: (_target, prop) => prop },
  ),
}))

describe("<Band />", () => {

  const defaultBand = <Band />;

  const referredToUs = {
    dark: true,
    title: "Most people are referred to us. You were probably referred to us.",
    copy: "Most of the people who reach out already know someone who's worked with us. If that's you, we're glad you're here. If you want to talk about what you're dealing with, that's what the conversation is for.",
    cta: { label: "Start a conversation" },
  };  

  it("renders component without crashing using defaults", () => {
    render(defaultBand);
    expect(screen.getByText('Band Title')).toBeInTheDocument();
  });

  it("renders a custom title", () => {
    const customTitle = "custom title!"
    render(<Band title={customTitle} />)
    expect(screen.getByText(customTitle)).toBeInTheDocument()
  });
  it("renders custom copy paragraph when prop is provided ", () => {
    const customCopy = "custom copy!"
    render(<Band copy={customCopy} />);
    expect(screen.getByText(customCopy)).toBeInTheDocument();
  });
  it("DOES NOT render copy when prop is omitted", () => {
    const {container} = render(defaultBand);
    const copy = container.querySelector('p');
    expect(copy).not.toBeInTheDocument();
  });
  it("renders dark styling when dark prop is true", () => {
    const {container} = render(<Band dark={true} />);
    const style = container.querySelector('.dark');
    expect(style).toBeInTheDocument();
  });
  it("renders custom CTA text", () => {
    const ctaText = "Button Text!";
    render(<Band cta={{ label: ctaText }} />);
    expect(screen.getByText(ctaText)).toBeInTheDocument();
  });
  it("matches snapshot", () => {
    const {container} = render(<Band {...referredToUs} />);
    expect(container).toMatchSnapshot();
  });
});
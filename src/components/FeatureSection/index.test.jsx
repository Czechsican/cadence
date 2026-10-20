import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import FeatureSection from "./";

vi.mock("./FeatureSection.module.css", () => ({
  default: new Proxy({}, { get: (_targer, prop) => prop }),
}));

describe("<FeatureSection />", () => {
  const defaultComponent = <FeatureSection />;

  const aboutCadence = {
    featureLabel: "About Cadence",
    featureTitle:
      "A real team. Not a founder with a roster behind the curtain.",
    featureCopy:
      "Cadence has grown into a bench of full-time coaches and specialists who've been doing this work long enough to have something to say about it. Whoever you end up working with, you're working with someone who's been in the room before.",
    cta: { label: "MEET THE TEAM", variant: "secondary" },
  };

  it("renders component without crashing using defaults", () => {
    render(defaultComponent);
    expect(screen.getByText("Feature Label")).toBeInTheDocument();
    expect(screen.getByText("Feature Title")).toBeInTheDocument();
    expect(screen.getByText("Feature Copy here")).toBeInTheDocument();
    expect(screen.getByText("Click the button")).toBeInTheDocument();
  });

  it("renders component with custom inputs", () => {
    render(<FeatureSection {...aboutCadence} />);
    expect(screen.getByText(aboutCadence.featureLabel)).toBeInTheDocument();
    expect(screen.getByText(aboutCadence.featureTitle)).toBeInTheDocument();
    expect(screen.getByText(aboutCadence.featureCopy)).toBeInTheDocument();
    expect(screen.getByText(aboutCadence.cta.label)).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<FeatureSection {...aboutCadence} />);
    expect(container).toMatchSnapshot();
  });
});

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import PageSection from "./index.jsx";

// Mock CSS module so class names are predictable
vi.mock("./PageSection.module.css", () => ({
  default: new Proxy(
    {},
    { get: (_target, prop) => prop }, // returns the key itself, e.g. styles.dark => "dark"
  ),
}));

// Mock child components to isolate PageSection's own logic
vi.mock("../Card", () => ({
  default: (props) => (
    <div data-testid="card" data-props={JSON.stringify(props)}>
      {props.cardTitle}
    </div>
  ),
}));

vi.mock("../Button", () => ({
  default: (props) => <button data-testid="cta-button">{props.label}</button>,
}));

vi.mock("../CornerTab", () => ({
  default: (props) => <div data-testid="corner-tab">{props.tabText}</div>,
}));

const theTeamSection = {
  name: "theTeam",
  cornerTab: "The Team",
  sectionTitle: "Coaches who've been in those rooms.",
  background: "tint",
  cards: [
    {
      tall: true,
      cardImg: {
        id: "coach1",
        alt: "Coaching",
      },
      cardTitle: "Coach name",
      cardCopy: "Senior Coach",
    },
    {
      tall: true,
      cardImg: {
        id: "coach2",
        alt: "Coaching",
      },
      cardTitle: "Coach name",
      cardCopy: "Senior Coach",
    },
    {
      tall: true,
      cardImg: {
        id: "coach3",
        alt: "Coaching",
      },
      cardTitle: "Coach name",
      cardCopy: "Senior Coach",
    },
    {
      tall: true,
      cardImg: {
        id: "coach4",
        alt: "Coaching",
      },
      cardTitle: "Coach name",
      cardCopy: "Senior Coach",
    },
  ],
};

describe("<PageSection />", () => {
  const stockPageSection = <PageSection />;

  it("renders without crashing using all defaults", () => {
    render(stockPageSection);
    expect(screen.getByText("Section Title Here")).toBeInTheDocument();
  });

  it("renders a custom sectionTitle", () => {
    const { container } = render(
      <PageSection sectionTitle="Custom Title" />,
    );
    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.queryByText("Section Title Here")).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("renders CornerTab with default text", () => {
    render(stockPageSection);
    expect(screen.getByText("Corner Tab Title")).toBeInTheDocument();
  });

  it("renders CornerTab with custom title", () => {
    const customTitle = "Custom Corner Tab Title";
    render(<PageSection cornerTab={customTitle} />);
    expect(screen.getByText(customTitle)).toBeInTheDocument();
  });

  it("renders the CTA button when cta prop is provided", () => {
    const customCTA = { label: "custom CTA" };
    render(<PageSection cta={customCTA} />);
    expect(screen.getByTestId("cta-button")).toBeInTheDocument();
  });

  it("DOES NOT render a CTA button when cta prop is omitted", () => {
    render(stockPageSection);
    expect(screen.queryByText("Button Text")).not.toBeInTheDocument();
  });

  it("renders sectionIntro when provided", () => {
    const intro = "intro";
    render(
      <PageSection sectionIntro={intro} />,
    );
    expect(screen.getByText(intro)).toBeInTheDocument();
  });

  it("DOES NOT render sectionIntro when omitted", () => {
    const { container } = render(stockPageSection);
    const introClass = container.querySelector(".sectionIntro");
    expect(introClass).not.toBeInTheDocument();
  });

  it("renders sectionCopy when provided", () => {
    const copy = "Section Copy";
    render(<PageSection sectionCopy={copy} />);
    expect(screen.getByText(copy)).toBeInTheDocument();
  });

  it("DOES NOT render sectionCopy when omitted", () => {
    const { container } = render(stockPageSection);
    const sectionCopyClass = container.querySelector(".sectionCopy");
    expect(sectionCopyClass).not.toBeInTheDocument();
  });

  it("renders the default 3 cards when cards prop is omitted", () => {
    render(stockPageSection);
    expect(screen.getAllByTestId("card")).toHaveLength(3);
  });

  it("renders the correct number of cards for a custom cards array", () => {
    const cards = [
      {
        tall: true,
        cardImg: {
          id: "coach1",
          alt: "Coaching",
        },
        cardTitle: "Coach name",
        cardCopy: "Senior Coach",
      },
      {
        tall: true,
        cardImg: {
          id: "coach2",
          alt: "Coaching",
        },
        cardTitle: "Coach name",
        cardCopy: "Senior Coach",
      },
      {
        tall: true,
        cardImg: {
          id: "coach3",
          alt: "Coaching",
        },
        cardTitle: "Coach name",
        cardCopy: "Senior Coach",
      },
      {
        tall: true,
        cardImg: {
          id: "coach4",
          alt: "Coaching",
        },
        cardTitle: "Coach name",
        cardCopy: "Senior Coach",
      },
    ];
    render(<PageSection cards={cards} />);
    expect(screen.getAllByTestId("card")).toHaveLength(4);
  });

  it("renders the Team Section correctly", () => {
    const { container } = render(
      <PageSection {...theTeamSection} />,
    );
    expect(container).toMatchSnapshot();
  });
});

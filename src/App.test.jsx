import { expect, it, describe, vi } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";


vi.mock("./App.css", () => ({
  default: new Proxy({}, { get: (_targer, prop) => prop }),
}));


describe("<App />", () => {
  it("should match snapshot", () => {
    const {container} = render(<App />);
    expect(container).toMatchSnapshot();
  })
})
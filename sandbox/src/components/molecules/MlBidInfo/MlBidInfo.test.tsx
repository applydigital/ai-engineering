import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MlBidInfo } from "./MlBidInfo";

describe("MlBidInfo", () => {
  it("renders the bid amount", () => {
    render(<MlBidInfo bid={500} timeRemaining={30} />);
    expect(screen.getByText("$500")).toBeDefined();
  });

  it("renders the countdown time", () => {
    render(<MlBidInfo bid={500} timeRemaining={30} />);
    expect(screen.getByText("00:30")).toBeDefined();
  });

  it("passes correct props to both child components", () => {
    render(<MlBidInfo bid={250} timeRemaining={45} />);
    expect(screen.getByText("$250")).toBeDefined();
    expect(screen.getByText("00:45")).toBeDefined();
  });

  it("applies custom className to container", () => {
    const { container } = render(
      <MlBidInfo bid={100} timeRemaining={60} className="custom-class" />,
    );
    expect(container.firstChild?.toString()).toBeDefined();
    expect((container.firstElementChild as HTMLElement).className).toContain("custom-class");
  });
});

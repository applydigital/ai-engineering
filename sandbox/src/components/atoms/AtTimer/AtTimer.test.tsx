import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AtTimer } from "./AtTimer";

describe("AtTimer", () => {
  it("renders 00:45 when timeRemaining is 45", () => {
    render(<AtTimer timeRemaining={45} />);
    expect(screen.getByText("00:45")).toBeDefined();
  });

  it("renders 01:00 when timeRemaining is 60", () => {
    render(<AtTimer timeRemaining={60} />);
    expect(screen.getByText("01:00")).toBeDefined();
  });

  it("renders 00:00 when timeRemaining is 0", () => {
    render(<AtTimer timeRemaining={0} />);
    expect(screen.getByText("00:00")).toBeDefined();
  });

  it("applies custom className to container", () => {
    render(<AtTimer timeRemaining={30} className="custom-class" />);
    const el = screen.getByText("00:30");
    expect(el.className).toContain("custom-class");
  });
});

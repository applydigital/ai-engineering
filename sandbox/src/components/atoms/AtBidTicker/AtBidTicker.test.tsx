import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AtBidTicker } from "./AtBidTicker";

describe("AtBidTicker", () => {
  it("renders the bid amount correctly", () => {
    render(<AtBidTicker bid={100} />);
    expect(screen.getByText("$100")).toBeDefined();
  });

  it("does not flash on initial render", () => {
    render(<AtBidTicker bid={100} />);
    const heading = screen.getByRole("heading");

    expect(heading.className).not.toContain("scale-110");
    expect(heading.className).not.toContain("text-green-400");
  });

  it("flashes when bid changes", async () => {
    const { rerender } = render(<AtBidTicker bid={100} />);
    const heading = screen.getByRole("heading");

    // Initial state - not flashing
    expect(heading.className).toContain("scale-100");
    expect(heading.className).toContain("text-white");

    // Change the bid
    rerender(<AtBidTicker bid={150} />);

    // Should be flashing
    await waitFor(() => {
      expect(heading.className).toContain("scale-110");
      expect(heading.className).toContain("text-green-400");
    });

    // After 500ms, should return to normal
    await waitFor(
      () => {
        expect(heading.className).toContain("scale-100");
        expect(heading.className).toContain("text-white");
      },
      { timeout: 600 },
    );
  });

  it("does not flash when bid value stays the same on re-render", async () => {
    const { rerender } = render(<AtBidTicker bid={100} />);
    const heading = screen.getByRole("heading");

    // Initial state
    expect(heading.className).toContain("scale-100");

    // Re-render with same bid
    rerender(<AtBidTicker bid={100} />);

    // Should not flash
    expect(heading.className).toContain("scale-100");
    expect(heading.className).toContain("text-white");
    expect(heading.className).not.toContain("scale-110");
  });

  it("applies custom className", () => {
    render(<AtBidTicker bid={100} className="custom-class" />);
    const heading = screen.getByRole("heading");

    expect(heading.className).toContain("custom-class");
  });
});

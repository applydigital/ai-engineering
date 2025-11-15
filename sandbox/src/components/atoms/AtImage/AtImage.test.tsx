import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AtImage } from "./AtImage";

describe("AtImage", () => {
  it("renders image with alt text", () => {
    render(<AtImage src="test.jpg" alt="Test image" />);
    const image = screen.getByAltText("Test image");
    expect(image).toBeDefined();
  });

  it("applies default variant styles", () => {
    render(<AtImage src="test.jpg" alt="Test" />);
    const container = screen.getByAltText("Test").parentElement;
    expect(container?.className).toContain("rounded-2xl");
  });
});

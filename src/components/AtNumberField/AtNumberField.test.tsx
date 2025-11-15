import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AtNumberField } from "./AtNumberField";

// biome-ignore lint: false flag secret
describe("AtNumberField", () => {
  it("renders without label", () => {
    render(<AtNumberField placeholder="Enter number" label="Number field" />);
    const input = screen.getByPlaceholderText("Enter number");
    expect(input).toBeDefined();
  });

  it("renders with label", () => {
    render(<AtNumberField label="Age" />);
    expect(screen.getByText("Age")).toBeDefined();
    expect(screen.getByRole("spinbutton")).toBeDefined();
  });

  it("renders with error message", () => {
    render(<AtNumberField label="Age" error="Age is required" />);
    const errorElement = screen.getByText("Age is required");
    expect(errorElement).toBeDefined();
    expect(errorElement.className).toContain("text-red-600");
  });

  it("applies error border styles when error is present", () => {
    render(<AtNumberField error="Error" label="Number field with Error" />);
    const input = screen.getByRole("spinbutton");
    expect(input.className).toContain("border-red-500");
  });

  it("applies normal border styles when no error", () => {
    render(<AtNumberField label="Default" />);
    const input = screen.getByRole("spinbutton");
    expect(input.className).toContain("border-gray-300");
  });

  it("handles disabled state", () => {
    render(<AtNumberField label="Number field" disabled />);
    const input = screen.getByRole("spinbutton");
    expect(input).toBeDisabled();
  });

  it("accepts custom className", () => {
    render(
      <AtNumberField className="custom-class" label="Custom Class field" />
    );
    const input = screen.getByRole("spinbutton");
    expect(input.className).toContain("custom-class");
  });

  it("has number type attribute", () => {
    render(<AtNumberField label="Number field" />);
    const input = screen.getByRole("spinbutton");
    expect(input.getAttribute("type")).toBe("number");
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { AtButton } from "./AtButton";

describe("AtButton", () => {
  it("renders children correctly", () => {
    render(
      <AtButton type="button" ariaLabel="test button" onClick={() => {}}>
        Click me
      </AtButton>,
    );
    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("applies base styles", () => {
    render(
      <AtButton type="button" ariaLabel="test button" onClick={() => {}}>
        Button
      </AtButton>,
    );
    const button = screen.getByRole("button");

    expect(button.className).toContain("backdrop-blur-md");
    expect(button.className).toContain("bg-white/60");
    expect(button.className).toContain("px-4 py-2");
  });

  it("calls onClick when button is clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <AtButton type="button" ariaLabel="test button" onClick={handleClick}>
        Click me
      </AtButton>,
    );

    const button = screen.getByRole("button");
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

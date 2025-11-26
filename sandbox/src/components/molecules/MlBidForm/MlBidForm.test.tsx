import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { MlBidForm } from "./MlBidForm";

describe("MlBidForm", () => {
  it("renders the form with all elements", () => {
    render(<MlBidForm onSubmit={() => {}} minBid={1} />);

    expect(screen.getByLabelText("Your Bid (CAD):")).toBeDefined();
    expect(screen.getByPlaceholderText("Enter your bid")).toBeDefined();
    expect(screen.getByRole("button", { name: "submit button" })).toBeDefined();
  });

  it("calls onSubmit with valid bid", async () => {
    const handleSubmit = vi.fn();
    const user = userEvent.setup();

    render(<MlBidForm onSubmit={handleSubmit} minBid={100} />);

    const input = screen.getByLabelText("Your Bid (CAD):");
    const submitButton = screen.getByRole("button", { name: "submit button" });

    await user.type(input, "150");
    await user.click(submitButton);

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith(150);
    });
  });

  it("shows error when bid is below minimum", async () => {
    const handleSubmit = vi.fn();
    const user = userEvent.setup();

    render(<MlBidForm onSubmit={handleSubmit} minBid={100} />);

    const input = screen.getByLabelText("Your Bid (CAD):");
    const submitButton = screen.getByRole("button", { name: "submit button" });

    await user.type(input, "50");
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("You need to beat the current bid."),
      ).toBeDefined();
    });

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("shows error when bid field is empty", async () => {
    const handleSubmit = vi.fn();
    const user = userEvent.setup();

    render(<MlBidForm onSubmit={handleSubmit} minBid={50} />);

    const submitButton = screen.getByRole("button", { name: "submit button" });

    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Kindly enter your Bid.")).toBeDefined();
    });

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("uses custom minBid value", async () => {
    const handleSubmit = vi.fn();
    const user = userEvent.setup();

    render(<MlBidForm onSubmit={handleSubmit} minBid={500} />);

    const input = screen.getByLabelText("Your Bid (CAD):");
    const submitButton = screen.getByRole("button", { name: "submit button" });

    await user.type(input, "400");
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("You need to beat the current bid."),
      ).toBeDefined();
    });

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("applies custom className", () => {
    const { container } = render(
      <MlBidForm onSubmit={() => {}} minBid={50} className="custom-class" />,
    );

    const form = container.querySelector("form");
    expect(form?.className).toContain("custom-class");
  });
});

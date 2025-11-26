import { describe, expect, it } from "vitest";
import { sanitizeTailwindClassnames } from "./sanitizeTailwindClassnames";

// biome-ignore lint: false flag secret
describe("sanitizeTailwindClassnames", () => {
  it.each([
    ["   p-4 m-2", "p-4 m-2"],
    ["p-4 m-2   ", "p-4 m-2"],
    ["   p-4 m-2   ", "p-4 m-2"],
    ["p-4    m-2", "p-4 m-2"],
    ["p-4\t\tm-2", "p-4 m-2"],
    ["p-4\n\nm-2", "p-4 m-2"],
    ["p-4 \t\n  m-2", "p-4 m-2"],
    ["p-4 m-2 p-4", "p-4 m-2"],
    ["p-4 m-2 p-4 m-2 text-sm", "p-4 m-2 text-sm"],
    ["text-lg p-4 m-2 text-lg", "text-lg p-4 m-2"],
    ["p-4  m-2   p-4", "p-4 m-2"],
    ["", ""],
    ["   ", ""],
    ["\t\t\t", ""],
    ["\n\n\n", ""],
    ["p-4", "p-4"],
    ["  p-4  ", "p-4"],
    ["p-4 md:p-6 lg:p-8 p-4", "p-4 md:p-6 lg:p-8"],
    [
      "bg-white hover:bg-gray-100 active:bg-gray-200",
      "bg-white hover:bg-gray-100 active:bg-gray-200",
    ],
    ["p-[20px] m-[1.5rem] p-[20px]", "p-[20px] m-[1.5rem]"],
    ["p-4 m-2 ", "p-4 m-2"],
    [
      "\n      font-medium rounded-lg\n      px-4 py-2 bg-white/60\n    ",
      "font-medium rounded-lg px-4 py-2 bg-white/60",
    ],
  ])("formats %s to %s", (input, expectedOutput) =>
    expect(sanitizeTailwindClassnames(input)).toBe(expectedOutput),
  );

  it("handles tailwind classes with special characters", () => {
    const output = sanitizeTailwindClassnames(
      "font-medium rounded-lg hover:-translate-y-0.5 backdrop-blur-md",
    );
    expect(output).toBe(
      "font-medium rounded-lg hover:-translate-y-0.5 backdrop-blur-md",
    );
    expect(output).not.toMatch(/\s{2,}/);
  });

  it("handles template literal tailwind classname Strings", () => {
    // Test 1: True condition branch
    const r1 = sanitizeTailwindClassnames(
      // biome-ignore lint: deliberate constant condition for test purposes
      `px-3 py-2 ${true ? "border-red-500/60" : "border-gray-300/40"} custom`,
    );
    expect(r1).toBe("px-3 py-2 border-red-500/60 custom");
    expect(r1).not.toMatch(/\s{2,}/);

    // Test 2: False condition branch
    const r2 = sanitizeTailwindClassnames(
      // biome-ignore lint: deliberate constant condition for test purposes
      `px-3 py-2 ${false ? "border-red-500/60" : "border-gray-300/40"} custom`,
    );
    expect(r2).toBe("px-3 py-2 border-gray-300/40 custom");
    expect(r2).not.toMatch(/\s{2,}/);

    // Test 3: Empty string interpolation
    const emptyClass = "";
    const r3 = sanitizeTailwindClassnames(`px-3 ${emptyClass} py-2`);
    expect(r3).toBe("px-3 py-2");
    expect(r3).not.toMatch(/\s{2,}/);

    // Test 4: Multiple interpolations
    const r4 = sanitizeTailwindClassnames(`${"base"} ${"extra"} ${"more"}`);
    expect(r4).toBe("base extra more");
    expect(r4).not.toMatch(/\s{2,}/);

    // Test 5: Mixed static and dynamic with duplicates
    const variant = "p-4";
    const r5 = sanitizeTailwindClassnames(`p-4 m-2 ${variant}`);
    expect(r5).toBe("p-4 m-2");
    expect(r5.match(/p-4/g)).toHaveLength(1);
  });
});

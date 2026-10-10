import { describe, it, expect } from "vitest";
import { toTitleCase, toTitleCasePhrase } from "./text-format";

describe("toTitleCase", () => {
  it("capitalizes each word", () => {
    expect(toTitleCase("4 months")).toBe("4 Months");
    expect(toTitleCase("2 classes/Week")).toBe("2 Classes/Week");
    expect(toTitleCase("2 hours/day")).toBe("2 Hours/Day");
  });
});

describe("toTitleCasePhrase", () => {
  it("normalizes 'Before course starts'", () => {
    expect(toTitleCasePhrase("Before course starts")).toBe("Before Course Start");
    expect(toTitleCasePhrase("before course start")).toBe("Before Course Start");
  });

  it("normalizes 'Start of Nth month'", () => {
    expect(toTitleCasePhrase("Start of 2nd month")).toBe("Before 2nd Month Start");
    expect(toTitleCasePhrase("start of 3rd month")).toBe("Before 3rd Month Start");
  });
});
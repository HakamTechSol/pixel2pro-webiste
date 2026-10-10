import { describe, expect, it } from "vitest";
import { isPakistaniMobileNumber } from "./phone-validation";

describe("isPakistaniMobileNumber", () => {
  it("accepts Pakistani mobile numbers with exactly 11 digits", () => {
    expect(isPakistaniMobileNumber("03001234567")).toBe(true);
  });

  it.each(["3001234567", "0300123456", "030012345678", "+923001234567", "0312ABC4567"])(
    "rejects invalid Pakistani mobile number %s",
    (number) => {
      expect(isPakistaniMobileNumber(number)).toBe(false);
    },
  );
});

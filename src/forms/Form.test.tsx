import "@testing-library/jest-dom";
import { getDollarValue } from "./Form";

describe("getDollarValue", () => {
  it("should return the value with only numbers and decimals", () => {
    expect(getDollarValue("12.34abcd")).toBe("12.34");
  });

  it("should return only the first two decimal places", () => {
    expect(getDollarValue("12.345")).toBe("12.34");
  });

  it("should return the first two decimal places if there are more than two decimals", () => {
    expect(getDollarValue("12.345.6")).toBe("12.34");
  });

  it("should return the value if there are no decimals", () => {
    expect(getDollarValue("1234")).toBe("1234");
  });

  it("should return the value if there are no decimals and no numbers", () => {
    expect(getDollarValue("abcd")).toBe("");
  });

  it("should return an empty string if the value is an empty string", () => {
    expect(getDollarValue("")).toBe("");
  });
});

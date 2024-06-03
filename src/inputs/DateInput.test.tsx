import "@testing-library/jest-dom";
import { getDateValue } from "./DateInput";

describe("getDateValue", () => {
  it("should return the value with only numbers and slashes", () => {
    expect(getDateValue("12/34abcd")).toBe("12/34/");
  });

  it("should cut the rest of the string if there are more than 10 characters", () => {
    expect(getDateValue("12/34/567848390")).toBe("12/34/5678");
  });

  it("should add a slash after the second number", () => {
    expect(getDateValue("12")).toBe("12/");
  });

  it("should add a slash after the second number and after the fourth number", () => {
    expect(getDateValue("12/34")).toBe("12/34/");
  });

  it("should add a slash if there are 3 numbers", () => {
    expect(getDateValue("123")).toBe("12/3");
  });

  it("should cut the month section if it is more than 2 characters", () => {
    expect(getDateValue("123/56")).toBe("12/56/");
  });

  it("should cut the day section if it is more than 2 characters", () => {
    expect(getDateValue("12/345/4323")).toBe("12/34/4323");
  });

  it("should allow for the month section to have 1 digit", () => {
    expect(getDateValue("1/43/1234")).toBe("1/43/1234");
  });

  it("should allow for the day section to have 1 digit", () => {
    expect(getDateValue("12/3/1234")).toBe("12/3/1234");
  });

  it("should return an empty string if the value is an empty string", () => {
    expect(getDateValue("")).toBe("");
  });
});

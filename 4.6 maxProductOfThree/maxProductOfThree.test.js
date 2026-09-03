const maxProductOfThree = require("./maxProductOfThree");

test("mảng có nhiều phần tử dương", () => {
    expect(maxProductOfThree([-1, 2, 3, 4])).toBe(24);
});

test("mảng có phần tử âm", () => {
    expect(maxProductOfThree([-10, -20, 5, 2])).toBe(1000);
});

test("mảng có nhiều phần tử âm", () => {
    expect(maxProductOfThree([-10, -10, -5, -2])).toBe(-100);
});

test("mảng ko đủ 3 phần tử", () => {
    expect(() => maxProductOfThree([1, 2])).toThrow("Mảng phải có ít nhất 3 phần tử.");
});
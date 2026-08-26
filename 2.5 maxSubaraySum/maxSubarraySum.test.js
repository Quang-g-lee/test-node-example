const maxSubarraySum = require("./maxSubarraySum");

test("returns maximum sum of a contiguous subarray", () => {
    expect(
        maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    ).toBe(6);
});

test("returns sum of all elements when all numbers are positive", () => {
    expect(
        maxSubarraySum([1, 2, 3, 4])
    ).toBe(10);
});

test("returns the largest number when all numbers are negative", () => {
    expect(
        maxSubarraySum([-8, -3, -6, -2, -5])
    ).toBe(-2);
});

test("returns the only number when array has one element", () => {
    expect(
        maxSubarraySum([5])
    ).toBe(5);
});

test("returns maximum sum when it is at the beginning", () => {
    expect(
        maxSubarraySum([5, 4, -10, 2])
    ).toBe(9);
});

test("returns maximum sum when it is at the end", () => {
    expect(
        maxSubarraySum([-5, -2, 3, 4])
    ).toBe(7);
});

test("throws error when input is not an array", () => {
    expect(
        () => maxSubarraySum("not array"))

    });
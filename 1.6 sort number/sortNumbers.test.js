const sortNumbers = require("./sortNumbers");


test("mảng rỗng", () => {
    expect(sortNumbers([])).toBe(null);
});

test("đầu vào không phải mảng", () => {
    expect(sortNumbers("5, 2, 1")).toBe(null);
});

test("mảng chứa phần tử không phải số", () => {
    expect(sortNumbers([5, "2", 1])).toBe(null);
});

test("sắp xếp mảng số theo thứ tự tăng dần", () => {
    expect(sortNumbers([5, 2, 10, 1, 3]))
        .toEqual([1, 2, 3, 5, 10]);
});

test("mảng đã được sắp xếp tăng dần", () => {
    expect(sortNumbers([1, 2, 3, 4, 5]))
        .toEqual([1, 2, 3, 4, 5]);
});

test("mảng có số âm", () => {
    expect(sortNumbers([3, -1, 0, -5, 2]))
        .toEqual([-5, -1, 0, 2, 3]);
});

test("mảng chỉ có một số", () => {
    expect(sortNumbers([8])).toEqual([8]);
});

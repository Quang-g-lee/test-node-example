const findMedian = require("./findMedian");

test("tìm trung vị của mảng có số phần tử lẻ", () => {
    expect(findMedian([5, 1, 3])).toBe(3);
});

test("tìm trung vị của mảng có số phần tử chẵn", () => {
    expect(findMedian([9, 1, 5, 3])).toBe(4);
});

test("mảng chỉ có một phần tử", () => {
    expect(findMedian([7])).toBe(7);
});

test("mảng có số âm", () => {
    expect(findMedian([-1, -5, -3])).toBe(-3);
});

test("mảng rỗng", () => {
    expect(findMedian([])).toBe(null);
});

test("đầu vào không phải mảng", () => {
    expect(findMedian("1, 2, 3")).toBe(null);
});

test("mảng chứa phần tử không phải số", () => {
    expect(findMedian([1, "2", 3])).toBe(null);
});
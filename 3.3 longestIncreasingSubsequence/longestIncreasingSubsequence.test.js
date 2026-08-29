const LIS = require('./longestIncreasingSubsequence');

test(' trả về độ dài của dãy con tăng dần dài nhất', () => {
    expect(LIS([3, 10, 2, 1, 20])).toBe(3);       // [3, 10, 20]
    expect(LIS([50, 3, 10, 7, 40, 80])).toBe(4);  // [3, 7, 40, 80]
    expect(LIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4); // [2, 3, 7, 101]
    expect(LIS([1, 2, 3, 4, 5])).toBe(5);
    expect(LIS([5, 4, 3, 2, 1])).toBe(1);
    expect(LIS([])).toBe(0);
});

test('báo lỗi nếu đầu vào không hợp lệ.', () => {
    expect(() => LIS("123")).toThrow();
    expect(() => LIS([1, 2, "3"])).toThrow();
});
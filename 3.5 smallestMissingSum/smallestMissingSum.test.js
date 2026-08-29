const smallestMissingSum = require("./smallestMissingSum");

test("trả về kết quả là số nhỏ nhất không phải tổng của tập con nào", () =>{

    expect(smallestMissingSum([1,2,3,7,8,20])).toBe(42);
    expect(smallestMissingSum([1, 1, 1, 1])).toBe(5);
    expect(smallestMissingSum([1, 2, 5, 10, 20])).toBe(4);
    expect(smallestMissingSum([2, 3, 4, 5])).toBe(1); // 1 không tạo được

});

test("Error", () =>{
    expect(() => smallestMissingSum([])).toThrow();
    expect(() => smallestMissingSum("string")).toThrow();
    expect(() => smallestMissingSum([1,-2,3])).toThrow();
    expect(() => smallestMissingSum([1,2.5,3])).toThrow();
})
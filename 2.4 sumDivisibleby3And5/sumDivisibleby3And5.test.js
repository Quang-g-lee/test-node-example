const sumDivisibleby3And5 = require("./sumDivisibleby3And5");

// test("mô tả bài kiểm tra", () => {
//     expect(kết_quả_thực_tế).toBe(kết_quả_mong_đợi);
// });

// test("mô tả bài kiểm tra", () => {
//
//     expect(() => hàm_cần_kiểm_tra())
//         .toThrow("thông báo lỗi mong đợi");
//
// });

test("không phải mảng, độ dài mảng = 0, có phần tử không phải số", () => {
    expect(() => sumDivisibleby3And5(["15"])).toThrow("Error");
    expect(() => sumDivisibleby3And5([])).toThrow("Error");
    expect(() => sumDivisibleby3And5([1,5,15,"123", 30])).toThrow("Error");
});

test("có 1 số thỏa mãn", () => {
    expect(sumDivisibleby3And5([15,5,3,7,9])).toBe(15);
});

test("có nhiều số thỏa mãn", () => {
    expect(sumDivisibleby3And5([15,45,30,79,95])).toBe(90);
});
test("có 0 số thỏa mãn", () => {
    expect(sumDivisibleby3And5([10,5,3,7,9])).toBe(0);
});
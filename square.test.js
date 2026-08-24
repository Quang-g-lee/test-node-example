const square = require ("./square")
// test("mô tả bài kiểm tra", () => {
//     expect(kết_quả_thực_tế).toBe(kết_quả_mong_đợi);
// });

test("the square of a positive number", () => {
    expect(square(2)).toBe(4);
});

test("the square of a negative number", () => {
    expect(square(-3)).toBe(9);
});

test("the square of 0", () => {
    expect(square(0)).toBe(0);
});
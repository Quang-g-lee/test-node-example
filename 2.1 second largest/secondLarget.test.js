const secondLarget = require("./secondLarget")

// test("mô tả bài kiểm tra", () => {
//     expect(kết_quả_thực_tế).toBe(kết_quả_mong_đợi);
// });
test("mảng rỗng", () => {
    expect(secondLarget([])).toBe(null);
});

test("không phải mảng", () => {
    expect(secondLarget("Lê Minh Quang")).toBe(null);
});


test("số dương", () => {
    expect(secondLarget([0, 455, 534, 134])).toBe(455);
});

test("số âm", () => {
    expect(secondLarget([-934, -421, -554, -111])).toBe(-421);
});

test("có trùng", () => {
    expect(secondLarget([1, 5, 7, 7, 2, 9, 9])).toBe(7);
});
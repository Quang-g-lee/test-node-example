const secondSmallest = require("./secondSmallest")

// test("mô tả bài kiểm tra", () => {
//     expect(kết_quả_thực_tế).toBe(kết_quả_mong_đợi);
// });
test("mảng rỗng", () => {
    expect(secondSmallest([])).toBe(null);
});

test("không phải mảng", () => {
    expect(secondSmallest("Lê Minh Quang")).toBe(null);
});


test("số dương", () => {
    expect(secondSmallest([0, 455, 534, 134])).toBe(134);
});

test("số âm", () => {
    expect(secondSmallest([-934, -421, -554, -111])).toBe(-554);
});

test("có trùng", () => {
    expect(secondSmallest([1, 1, 3, 5, 7, 7, 2, 9, 9])).toBe(2);
});

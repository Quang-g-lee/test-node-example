const maximum = require("./max")

// test("mô tả bài kiểm tra", () => {
//     expect(kết_quả_thực_tế).toBe(kết_quả_mong_đợi);
// });
test("mảng rỗng", () => {
    expect(maximum([])).toBe(null);
});

test("không phải mảng", () => {
    expect(maximum("Lê Minh Quang")).toBe(null);
});



test("số đầu lớn nhất", () => {
    expect(maximum([9, 4, 5, 1])).toBe(9);
});

test("số đầu không lớn nhất", () => {
    expect(maximum([0, 455, 534, 134])).toBe(534);
});

test("có số âm", () => {
    expect(maximum([-934, 421, 554, 111])).toBe(554);
});

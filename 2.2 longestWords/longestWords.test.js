const longestWords = require('./longestWords');

// test("mô tả bài kiểm tra", () => {
//     expect(kết_quả_thực_tế).toBe(kết_quả_mong_đợi);
// });

// test("mô tả bài kiểm tra", () => {
//
//     expect(() => hàm_cần_kiểm_tra())
//         .toThrow("thông báo lỗi mong đợi");
//
// });

test('should return the longest word', () => {
    expect(longestWords(["apple", "banana", "cherry", "date"])).toBe("banana");
    expect(longestWords(["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(longestWords(["same", "size", "four"])).toBe("same");
    expect(longestWords(["oneword"])).toBe("oneword");
});

test('should throw error for invalid input', () => {
    expect(() => longestWords("string")).toThrow();
    expect(() => longestWords()).toThrow();
    expect(() => longestWords('quang', 123, 'nam')).toThrow();

});


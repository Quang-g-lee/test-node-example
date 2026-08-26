const longestCommonSubstring = require("./longestCommonSubstring")
// test("mô tả bài kiểm tra", () => {
//     expect(kết_quả_thực_tế).toBe(kết_quả_mong_đợi);
// });
test("str1 is longer than str2", () =>{
    expect(longestCommonSubstring("abrgnjabc", "abcd")).toBe("abc");
});

test("str1 is shorter than str2", () =>{
    expect(longestCommonSubstring("abcdef", "abczyzcdef")).toBe("cdef");
});

test("return 1 character", () =>{
    expect(longestCommonSubstring("edrf", "abcd")).toBe("d");
});

test("không có ký tự trùng", () =>{
    expect(longestCommonSubstring("abcd", "efgh")).toBe("");
});
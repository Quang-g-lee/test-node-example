const mostOverlappingStrings = require("./mostOverlappingStrings");

test("đầu vào bình thường", () => {
    expect(
        mostOverlappingStrings(["hello", "world", "yellow"])
    ).toEqual(["hello", "yellow"]);
});

test("1 ký tự lặp lại nhiều lần", () => {
    expect(
        mostOverlappingStrings(["aaa", "aa", "b"])
    ).toEqual(["aaa", "aa"]);
});

test("nếu mảng chỉ có 2 chuỗi", () => {
    expect(
        mostOverlappingStrings(["abc", "bcd"])
    ).toEqual(["abc", "bcd"]);
});

test("nhiều cặp có độ trùng lặp bằng nhau thì trả về cặp đầu tiên", () => {
    expect(
        mostOverlappingStrings(["ab", "ac", "ad"])
    ).toEqual(["ab", "ac"]);
});

test("không có cặp nào trùng thì trả về cặp đầu tiên", () => {
    expect(
        mostOverlappingStrings(["abc", "def", "xyz"])
    ).toEqual(["abc", "def"]);
});
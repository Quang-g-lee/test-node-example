const longestPalindromelength =
    require("./longestPalindromelength");

test("aabb trả về 4", () => {
    expect(longestPalindromelength("aabb")).toBe(4);
});

test("aabbc trả về 5", () => {
    expect(longestPalindromelength("aabbc")).toBe(5);
});

test("abccccdd trả về 7", () => {
    expect(longestPalindromelength("abccccdd")).toBe(7);
});

test("không phân biệt chữ hoa và chữ thường", () => {
    expect(longestPalindromelength("AaBb")).toBe(4);
});

test("bỏ qua khoảng trắng và ký tự đặc biệt", () => {
    expect(longestPalindromelength("Aa, Bb!")).toBe(4);
});

test("một ký tự trả về 1", () => {
    expect(longestPalindromelength("a")).toBe(1);
});

test("chuỗi rỗng trả về 0", () => {
    expect(longestPalindromelength("")).toBe(0);
});

test("chuỗi chỉ có ký tự đặc biệt trả về 0", () => {
    expect(longestPalindromelength("!@#$%")).toBe(0);
});

test("đầu vào không phải chuỗi thì báo lỗi", () => {
    expect(() => longestPalindromelength(123)).toThrow(
        "đầu vào phải là 1 chuỗi ký tự"
    );
});

test("đầu vào là mảng thì báo lỗi", () => {
    expect(() => longestPalindromelength(["a", "b"])).toThrow(
        "đầu vào phải là 1 chuỗi ký tự"
    );
});
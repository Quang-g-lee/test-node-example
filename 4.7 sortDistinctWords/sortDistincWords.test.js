const sortDistincWords = require("./sortDistincWords");

describe("sortDistinctWords", () => {
    test("Sắp xếp chuỗi từ dài nhất đến ngắn nhất theo ví dụ của đề", () => {
        expect(sortDistincWords(["the quick brown fox", "the lazy dog jumps over the fence", "the cat in the hat"])).toEqual(["the lazy dog jumps over the fence", "the quick brown fox", "the cat in the hat"]);
    });

    test("Nếu hai chuỗi cùng độ dài thì sắp xếp từ Z đến A", () => {
        expect(sortDistincWords(["dog", "ant", "cat"])).toEqual(["dog", "cat", "ant"]);
    });

    test("Không làm thay đổi mảng ban đầu", () => {
        const input = ["cat", "elephant", "banana"];
        sortDistincWords(input);
        expect(input).toEqual(["cat", "elephant", "banana"]);
    });

    test("Báo lỗi nếu đầu vào không phải mảng", () => {
        expect(() => sortDistincWords("hello")).toThrow("Đầu vào phải là một mảng");
    });

    test("Báo lỗi nếu mảng rỗng", () => {
        expect(() => sortDistincWords([])).toThrow("Mảng không được rỗng");
    });

    test("Báo lỗi nếu có phần tử không phải chuỗi", () => {
        expect(() => sortDistincWords(["hello", 123, "world"])).toThrow("Tất cả phần tử phải là chuỗi");
    });
});
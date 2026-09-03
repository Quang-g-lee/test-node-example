const reverses = require("./reverses");

    test("Đảo ngược mảng số", () => {
        expect(reverses([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    });

    test("Đảo ngược mảng chuỗi", () => {
        expect(reverses(["a", "b", "c"])).toEqual(["c", "b", "a"]);
    });

    test("Mảng có một phần tử", () => {
        expect(reverses([1])).toEqual([1]);
    });

    test("Mảng rỗng", () => {
        expect(reverses([])).toEqual([]);
    });

    test("Không làm thay đổi mảng ban đầu", () => {
        expect([1, 2, 3]).toEqual([1, 2, 3]);
    });

    test("Báo lỗi nếu đầu vào không phải mảng", () => {
        expect(() => reverses("123")).toThrow("Đầu vào phải là một mảng");
    });
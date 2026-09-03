const longestIncreasingWithDiff1 = require("./longestIncreasingSubseqWithDiff1");

    test("Tìm độ dài lớn nhất khi toàn bộ mảng tăng liên tiếp 1 đơn vị", () => {
        expect(longestIncreasingWithDiff1([1, 2, 3, 4, 5])).toBe(5);
    });

    test("Tìm đoạn tăng liên tiếp dài nhất trong mảng", () => {
        expect(
            longestIncreasingWithDiff1([1, 2, 3, 7, 8])
        ).toBe(3);
    });

    test("Đoạn dài nhất nằm ở cuối mảng", () => {
        expect(
            longestIncreasingWithDiff1([8, 3, 4, 5, 6])
        ).toBe(4);
    });

    test("Không có hai số liền nhau tăng đúng 1 đơn vị", () => {
        expect(
            longestIncreasingWithDiff1([1, 3, 5, 7])
        ).toBe(1);
    });

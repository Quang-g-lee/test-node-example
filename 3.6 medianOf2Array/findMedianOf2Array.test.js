const findMedianOf2Array = require ("./findMedianOf2Array");
    test("trả về trung vị khi tổng số phần tử là lẻ", () => {
        expect(findMedianOf2Array([1, 3], [2])).toBe(2);
    });

    test("trả về trung vị khi tổng số phần tử là chẵn", () => {
        expect(findMedianOf2Array([1, 2], [3, 4])).toBe(2.5);
    });

    test("hoạt động khi hai mảng chưa được sắp xếp", () => {
        expect(findMedianOf2Array([5, 1], [4, 2, 3])).toBe(3);
    });

    test("hoạt động khi một mảng rỗng", () => {
        expect(findMedianOf2Array([], [1, 2, 3])).toBe(2);
    });

    test("hoạt động với số âm", () => {
        expect(findMedianOf2Array([-5, -1], [-3, -2])).toBe(-2.5);
    });

    test("báo lỗi khi cả hai mảng đều rỗng", () => {
        expect(() => findMedianOf2Array([], [])).toThrow("Error");
    });

    test("báo lỗi khi arr1 không phải mảng", () => {
        expect(() => findMedianOf2Array("abc", [1, 2])).toThrow("Error");
    });

    test("báo lỗi khi arr2 không phải mảng", () => {
        expect(() => findMedianOf2Array([1, 2], null)).toThrow("Error");
    });
const bubbleSortMoves = require("./bubbleSort");

    test("cần 4 lần đổi chỗ", () => {
        expect(bubbleSortMoves([3, 1, 4, 2, 6, 5])).toBe(4);
    });

    test("mảng đã được sắp xếp thì không cần đổi chỗ", () => {
        expect(bubbleSortMoves([1, 2, 3, 4, 5])).toBe(0);
    });

    test("mảng sắp xếp ngược cần 6 lần đổi chỗ", () => {
        expect(bubbleSortMoves([4, 3, 2, 1])).toBe(6);
    });

    test("mảng chỉ có một phần tử", () => {
        expect(bubbleSortMoves([5])).toBe(0);
    });

    test("mảng rỗng", () => {
        expect(bubbleSortMoves([])).toBe(0);
    });

    test("các phần tử bằng nhau không cần đổi chỗ", () => {
        expect(bubbleSortMoves([2, 2, 2])).toBe(0);
    });

    test("không làm thay đổi mảng ban đầu", () => {
        const numbers = [3, 1, 2];

        bubbleSortMoves(numbers);

        expect(numbers).toEqual([3, 1, 2]);
    });
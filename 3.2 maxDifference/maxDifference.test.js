const maxDifference = require('./maxDifference');

describe('maxDifference', () => {
    test('mảng số dương', () => {
        expect(maxDifference([1, 5, 3, 9])).toBe(8);
    });

    test('mảng số âm', () => {
        expect(maxDifference([-8, -2, -5, -1])).toBe(7);
    });

    test('mảng gồm số âm và số dương', () => {
        expect(maxDifference([-5, 2, 10, -1])).toBe(15);
    });

    test('các phần tử giống nhau', () => {
        expect(maxDifference([4, 4, 4])).toBe(0);
    });

    test('mảng chỉ có một phần tử', () => {
        expect(maxDifference([7])).toBe(0);
    });

    test('mảng rỗng', () => {
        expect(() => maxDifference([])).toThrow('Error');
    });

    test('đầu vào không phải mảng', () => {
        expect(() => maxDifference('Lê Minh Quang')).toThrow('Error');
    });
});
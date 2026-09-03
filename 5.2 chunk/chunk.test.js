const chunk = require('./chunk');

    test('chunk size 2', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    });

    test('chunk size 3', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
    });

    test('chunk size lớn hơn độ dài mảng', () => {
        expect(chunk(['x', 'y'], 5)).toEqual([['x', 'y']]);
    });

    test('chunk size 0', () => {
        expect(chunk(['a', 'b'], 0)).toEqual([]);
    });

    test('mảng rỗng', () => {
        expect(chunk([], 3)).toEqual([]);
    });
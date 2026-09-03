const sumAll = require('./sumAll');

test('sumAll cộng bình thường', () => {
    const arr = [
        { a: 2, b: 10 },
        { a: 12, c: 11 },
        { a: 8, b: 14, d: 20 },
        { a: '8' }
    ];
    expect(sumAll(arr)).toEqual({ a: 30, b: 24, c: 11, d: 20 });
});

test('sumAll bỏ qua value k phải số', () => {
    expect(sumAll([{ x: 'abc' }, { x: 2 }])).toEqual({ x: 2 });
});

test('sumAll returns object rỗng nếu input rỗng', () => {
    expect(sumAll([])).toEqual({});
});


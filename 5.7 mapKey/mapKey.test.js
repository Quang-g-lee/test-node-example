const mapKey = require('./mapKey');

const keys = ['b', 'a', 'c'];
const collections = [
    { a: 1, b: 1, c: 2, d: 4, e: 5 },
    { a: 2, b: 1, c: 5, d: 4, e: 5 },
    { d: 4, e: 5, a: 22, b: 11, c: 51 }
];

test('mapKey ánh xạ chính xác các key', () => {
    expect(mapKey(keys, collections)).toEqual([
        { b: 1, a: 1, c: 2 },
        { b: 1, a: 2, c: 5 },
        { b: 11, a: 22, c: 51 }
    ]);
});

test('mapKey với mảng rỗng', () => {
    expect(mapKey(keys, [])).toEqual([]);
});

test('mapKey bỏ qua key không tồn tại', () => {
    expect(mapKey(['a', 'z'], [{ a: 1 }, { a: 2, z: 5 }])).toEqual([{ a: 1 }, { a: 2, z: 5 }]);
});
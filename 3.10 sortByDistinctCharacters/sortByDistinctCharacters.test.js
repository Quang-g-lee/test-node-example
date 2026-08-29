const sortByDistinctCharacters = require('./sortByDistinctCharacters');

test('sắp xếp bình thường', () => {
    const input = ['apple', 'banana', 'orange', 'kiwi', 'strawberry'];
    const output = [ 'banana','kiwi', 'apple', 'orange', 'strawberry'];
    expect(sortByUniqueCharacters(input)).toEqual(output);
});

test('mảng rỗng', () => {
    expect(sortByUniqueCharacters([])).toEqual([]);
});

test('lỗi', () => {
    expect(() => sortByUniqueCharacters(["valid", 123, "text"])).toThrow();  //tất cả phần tử phải là chuỗi
    expect(() => sortByUniqueCharacters("not array")).toThrow(); //input phải là mảng
});
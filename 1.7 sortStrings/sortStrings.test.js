const sortStrings = require ("./sortStrings")

test("Sắp xếp chuỗi theo thứ tự bảng chữ cái", () => {
    expect(sortStrings(["banana", "apple", "orange"]))
        .toEqual(["apple", "banana", "orange"]);
});

test("Sắp xếp mảng chuỗi đã đúng thứ tự", () => {
    expect(sortStrings(["apple", "banana", "orange"]))
        .toEqual(["apple", "banana", "orange"]);
});

test("Sắp xếp mảng có một chuỗi", () => {
    expect(sortStrings(["apple"]))
        .toEqual(["apple"]);
});

test("Sắp xếp mảng rỗng", () => {
    expect(sortStrings([])).toEqual([]);
});

test("Sắp xếp các chữ cái", () => {
    expect(sortStrings(["c", "a", "b"]))
        .toEqual(["a", "b", "c"]);
});
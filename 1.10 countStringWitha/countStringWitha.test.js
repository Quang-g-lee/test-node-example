const countStringWitha = require('./countStringWitha')


test('Chuỗi thông thường', () => {
        expect(countStringWitha(['apple', 'hello'])).toBe(1);
    });

test('Tất cả các chuỗi đều chứa ký tự a', () => {
    expect(countStringWitha(['apple', 'banana', 'cat'])).toBe(3);
});

test('Không có chuỗi nào chứa ký tự a', () => {
    expect(countStringWitha(['hello', 'world', 'fish'])).toBe(0);
});

test('Chứa ký tự A viết hoa', () => {
    expect(countStringWitha(['Apple', 'ANANAS', 'orange'])).toBe(1);
});

test('Mảng rỗng không có phần tử', () => {
    expect(countStringWitha([])).toBe(0);
});

test('Chuỗi chỉ gồm một ký tự a', () => {
    expect(countStringWitha(['a', 'A', 'b'])).toBe(1);
});

test('Mảng chứa các phần tử không phải là chuỗi (Bảo vệ code)', () => {
    expect(countStringWitha(['apple', 123, null, undefined, 'dog'])).toBe(1);
});

test('Dữ liệu đầu vào không phải là mảng', () => {
    expect(countStringWitha("không phải mảng")).toBe(null);
    expect(countStringWitha(null)).toBe(null);
});
const countWords = require('./countWord');


    test('Chuỗi thông thường', () => {
        expect(countWords('Hello world')).toBe(2);
    });

    test('Chuỗi có nhiều khoảng trắng ở giữa', () => {
        expect(countWords('Xin    chào   Việt    Nam')).toBe(4);
    });

    test('Chuỗi có khoảng trắng ở đầu và cuối', () => {
        expect(countWords('   Javascript là ngôn ngữ phổ biến   ')).toBe(6);
    });

    test('Chuỗi rỗng', () => {
        expect(countWords('')).toBe(0);
        expect(countWords('    ')).toBe(0);
    });

    test('Chuỗi chỉ có một từ', () => {
        expect(countWords('OpenAI')).toBe(1);
    });

    test('Dữ liệu đầu vào không hợp lệ', () => {
        expect(countWords(null)).toBe(0);
        expect(countWords(12345)).toBe(0);
    });

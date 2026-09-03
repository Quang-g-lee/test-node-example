const findMaxOverlapPair = require('./findMaxOverlapPair');

test("Trả về cặp chuỗi có phần trùng lớn nhất và độ dài không nhỏ hơn k", () => {
    const input = ['abcde', 'cdefg', 'defxyz', 'xyzabc'];
    const k = 2;
    const result = findMaxOverlapPair(input, k);
    expect(result).toEqual(['abcde', 'cdefg']); // 'cde' overlap
});

test("Trả về đúng cặp có chuỗi con chung dài 3 ký tự", () => {
    const input = ["hello", "lloabc", "world", "abcxyz"];
    const k = 3;
    const result = findMaxOverlapPair(input, k);
    expect(result).toEqual(["hello", "lloabc"]); // 'llo' overlap
});

test("Trả về mảng rỗng khi không có phần trùng nào có độ dài từ k trở lên", () => {
    const input = ["apple", "banana", "carrot"];
    const k = 3;
    const result = findMaxOverlapPair(input, k);
    expect(result).toEqual([]);
});

test("Xử lý được trường hợp chuỗi con chung có độ dài bằng k", () => {
    const input = ["abcd", "cdef", "efgh"];
    const k = 2;
    const result = findMaxOverlapPair(input, k);
    expect(result).toEqual(["abcd", "cdef"]); // 'cd' overlap
});


const findMaxOverlapPair = require("./findMaxOverlapPair");

test("Trả về cặp chuỗi có phần trùng lớn nhất và độ dài không nhỏ hơn k", () => {
    const input = ["abcde", "cdefg", "defxyz", "xyzabc"];
    const k = 2;

    const result = findMaxOverlapPair(input, k);

    // "abcde" và "cdefg" có chuỗi con chung là "cde"
    expect(result).toEqual(["abcde", "cdefg"]);
});

test("Trả về đúng cặp có chuỗi con chung dài 3 ký tự", () => {
    const input = ["hello", "lloabc", "world", "abcxyz"];
    const k = 3;

    const result = findMaxOverlapPair(input, k);

    // "hello" và "lloabc" có chuỗi con chung là "llo"
    expect(result).toEqual(["hello", "lloabc"]);
});

test("Trả về mảng rỗng khi không có phần trùng nào có độ dài từ k trở lên", () => {
    const input = ["apple", "banana", "carrot"];
    const k = 3;

    const result = findMaxOverlapPair(input, k);

    expect(result).toEqual([]);
});

test("Xử lý được trường hợp chuỗi con chung có độ dài bằng k", () => {
    const input = ["abcd", "cdef", "efgh"];
    const k = 2;

    const result = findMaxOverlapPair(input, k);

    // "abcd" và "cdef" có chuỗi con chung là "cd"
    expect(result).toEqual(["abcd", "cdef"]);
});

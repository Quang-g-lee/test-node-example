const longestSubStrings = require('./longestSubStrings');

test('Example 1: ["abcde", "bcdef", "cdefg"]', () => {
    expect(longestSubStrings(["abcde", "bcdef", "cdefg"])).toBe(3);
});

test('Example 2: ["hello", "world", "hold"]', () => {
    expect(longestSubStrings(["hello", "world", "hold"])).toBe(1);
});

test('Example 3: ["abcd", "efgh", "ijkl"]', () => {
    expect(longestSubStrings(["abcd", "efgh", "ijkl"])).toBe(0);
});

test('Example 4: ["aaa", "aaabbb", "aaaccc"]', () => {
    expect(longestSubStrings(["aaa", "aaabbb", "aaaccc"])).toBe(3);
});

test('mảng rỗng', () => {
    expect(longestSubStrings([])).toBe(0);
});

test('mảng chỉ có một chuỗi', () => {
    expect(longestSubStrings(["single"])).toBe(6);
});

test('mảng có chuỗi rỗng', () => {
    expect(longestSubStrings(["abc", "", "def"])).toBe(0);
});
    
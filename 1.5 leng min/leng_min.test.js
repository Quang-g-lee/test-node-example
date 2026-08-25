const leng_min = require('./leng_min');

test("mảng rỗng", () => {
    expect(leng_min([])).toBe(null);
});

test("không phải mảng", () => {
    expect(leng_min("Lê Minh Quang")).toBe(null);
});



test("chuỗi đầu ngắn nhất", () => {
    expect(leng_min(["css", "javascript", "html", "react", "nodejs"])).toBe("css");
});

test("chuỗi đầu không ngắn nhất", () => {
    expect(leng_min(["javascript", "html", "css", "react", "nodejs"])).toBe("css");
});

test("chuỗi duy nhất", () => {
    expect(leng_min(["javascript"])).toBe("javascript");
});

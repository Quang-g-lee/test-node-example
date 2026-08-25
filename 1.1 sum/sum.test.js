const sum = require("./sum")

test("adds 1 + 2 to equal 3", () =>{
    expect(sum(1,2)).toBe(3);
}  );

test("adds 1 + -5 to equal -4", () =>{
    expect(sum(1,-5)).toBe(-4);
}  );

test("adds -1 + 5 to equal 6", () =>{
    expect(sum(-1,5)).toBe(4);
}  );

test("adds 225 + 112 to equal 337", () =>{
    expect(sum(225,112)).toBe(337);
}  );

test("adds 225 + 112 to equal 337", () =>{
    expect(sum(-225,-112)).toBe(-337);
}  );
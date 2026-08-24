const leng=require("./leng")


test("returns the character length of the string", () =>{
    expect(leng('LeMinhQuang')).toBe(11);
}  );

test("returns 0 if the string is empty", () =>{
    expect(leng('')).toBe(0);
}  );

test("Check for whitespace and special characters", () =>{
    expect(leng('Le Minh Quang @!')).toBe(16);
}  );
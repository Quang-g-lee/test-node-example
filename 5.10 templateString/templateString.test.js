const fs = require('fs');
const path = require('path');
const templateString = require('./templateString');

test("thay thế các params trong file template.txt và ghi vào output.txt", () => {
    //tạo đường dẫn đến 2 file template.txt và output.txt
    const templateFile = path.join(__dirname, 'template.txt');  //path.join để nối các phần của đường dẫn lại với nhau
    const outputFile = path.join(__dirname, 'output.txt');

    const params = { name: "Jonny"};
    templateString(templateFile, params, outputFile);

    const result = fs.readFileSync(outputFile, "utf-8");  //đọc file output.txt

    expect(result).toBe("Hello Jonny, how are you?");
});

test("Thay thế nhiều params trong file HTML", () => {
    const templateFile = path.join(__dirname, "template.html");
    const outputFile = path.join(__dirname, "output.html");

    const params = {
        title: "Search of skill",
        pageTitle: "Home page",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    };

    templateString(templateFile, params, outputFile);

    const result = fs.readFileSync(outputFile, "utf8");

    expect(result).toContain(
        "<title>Search of skill</title>"
    );

    expect(result).toContain(
        "<h1>Home page</h1>"
    );

    expect(result).toContain(
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>"
    );
});
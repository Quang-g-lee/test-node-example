const uniqArrayObject = require("./uniqArrayObject");

    test("Loại bỏ các object bị trùng", () => {
        const input = [
            { x: 1, y: 2 },
            { x: 2, y: 1 },
            { y: 2, x: 1 }
        ];

        const result = [
            { x: 1, y: 2 },
            { x: 2, y: 1 }
        ];

        expect(uniqArrayObject(input)).toEqual(result);
    });

    test("Không loại bỏ object nếu giá trị khác nhau", () => {
        const input = [
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 2, y: 2 }
        ];

        expect(uniqArrayObject(input)).toEqual(input);
    });

    test("Loại bỏ nhiều object trùng nhau", () => {
        const input = [
            { name: "An", age: 20 },
            { age: 20, name: "An" },
            { name: "Bình", age: 22 },
            { name: "An", age: 20 }
        ];

        const result = [
            { name: "An", age: 20 },
            { name: "Bình", age: 22 }
        ];

        expect(uniqArrayObject(input)).toEqual(result);
    });

    test("Trả về mảng rỗng khi đầu vào là mảng rỗng", () => {
        expect(uniqArrayObject([])).toEqual([]);
    });

    test("Object có số lượng thuộc tính khác nhau không bị coi là trùng", () => {
        const input = [
            { x: 1 },
            { x: 1, y: 2 },
            { x: 1 }
        ];

        const result = [
            { x: 1 },
            { x: 1, y: 2 }
        ];

        expect(uniqArrayObject(input)).toEqual(result);
    });

    test("Không làm thay đổi mảng ban đầu", () => {
        const input = [
            { x: 1, y: 2 },
            { y: 2, x: 1 }
        ];
    });
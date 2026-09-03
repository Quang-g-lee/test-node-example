function reverses(array) {
    if (!Array.isArray(array)) {
        throw new Error("Đầu vào phải là một mảng");
    }

    const result = [];

    array.forEach(element => {
        // Đưa phần tử hiện tại vào đầu mảng result
        result.unshift(element);
    });

    return result;
}

module.exports = reverses;
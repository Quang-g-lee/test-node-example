function sortByDistinctCharacters(strings) {
    if (!Array.isArray(strings)) {
        throw new Error("Đầu vào phải là một mảng");
    }

    for (const string of strings) {
        if (typeof string !== "string") {
            throw new Error("Các phần tử phải là chuỗi");
        }
    }

    // Sao chép strings
    const result = [...strings];

    result.sort((firstString, secondString) => {
        
        const firstDistinctCount = new Set(firstString).size;  //// Set để loại bỏ các ký tự trùng nhau
        const secondDistinctCount = new Set(secondString).size;

        if (firstDistinctCount !== secondDistinctCount) {
            return firstDistinctCount - secondDistinctCount;
        }

        else{
            return 0;
        }
        
    });

    return result;
}

module.exports = sortByDistinctCharacters;
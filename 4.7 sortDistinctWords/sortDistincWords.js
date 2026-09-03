function sortDistinctWords(strings) {
    if (strings.length === 0) {
        throw new Error("Mảng không được rỗng.");
    }
    if(!Array.isArray(strings)){
        throw new Error("Đầu vào phải là một mảng.");
    }
    for (const str of strings) {
        if (typeof str !== "string") {
            throw new Error("Tất cả phần tử phải là chuỗi.");
        }
    }
    const result = [];

    strings.forEach(str => {
        result.push(str);
    });  //sao chép strings vào result

    result.sort((firstStr, secondStr) => {
        if( firstStr.length !== secondStr.length){
            return secondStr.length - firstStr.length;  //sắp xếp theo độ dài giảm dần
        }
        return secondStr.localeCompare(firstStr);  //sắp xếp theo chữ cái z-a
    });

    return result;
}

module.exports = sortDistinctWords;
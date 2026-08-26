function longestWords(words){
    if (!Array.isArray(words) || words.length === 0) {
        throw new Error("Đầu vào phải là một mảng chuỗi không rỗng");
    }

    let longest = "";
    for (const word of words){
        if(typeof word !== "string"){
            throw new Error("Từng thành phần phải là chuỗi");
        }
        if (longest.length < word.length){
            longest = word;
        }
    }
    return longest;

}

module.exports = longestWords;
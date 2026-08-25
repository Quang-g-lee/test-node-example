function countStringWitha(str){
    if (!Array.isArray(str)) {
        return null;
    }
    const ketqua = str.filter(function(word){
        return typeof word === "string" && word.includes("a");
    })

    return ketqua.length;
}

module.exports = countStringWitha;
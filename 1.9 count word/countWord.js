function countWord(str){
if (!str || typeof str !== "string"){
    return 0;
}

const words = str.trim().split(/\s+/);
return words.filter(words => words.length > 0).length;
}

module.exports = countWord;
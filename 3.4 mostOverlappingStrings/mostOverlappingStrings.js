function countCommonCharacters(str1, str2){
    let commonCount = 0;
    const charactersOfstr2 = str2.split("");

    for(const character of str1) {
        const position = charactersOfstr2.indexOf(character);
        if (position !== -1) {
            commonCount ++;
            charactersOfstr2.splice(position,1);
        }
    }
    return commonCount;
}

function mostOverlappingStrings(strings){
    let mostOverlap = -1;   //để cặp chuỗi đầu tiên chắc chắn được lưu lại
    for(let i = 0; i < strings.length; i++){
        for (let j = i+1; j < strings.length; j ++){
            const firstString = strings[i];
            const secondString = strings[j];
            const commonCount = countCommonCharacters(firstString, secondString);

            if(commonCount > mostOverlap) {
                mostOverlap = commonCount;
                result = [firstString, secondString];
            }
        }
    }
    return result;
}



module.exports = mostOverlappingStrings;



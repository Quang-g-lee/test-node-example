function longestCommonSubstring(str1, str2){
    let longest = "";
    for(let i = 0; i < str1.length; i++){
        for(let j=i+1; j <= str1.length; j++){
            const part = str1.slice(i,j);
            if(str2.includes(part) && part.length > longest.length){
                longest = part;
            }
        }
    }
    return longest;
}

module.exports = longestCommonSubstring;
function secondSmallest(numbers){
    if( !Array.isArray(numbers) || numbers.length===0 || numbers.length===1 || !numbers.every(item => typeof item === "number") ){
        return null;
    }
    numbers.sort(function (a, b) {
        return a-b;
    });
    const uniqueNumbers = [...new Set(numbers)];
    if (uniqueNumbers.length === 1){return null}
    return uniqueNumbers[1];
}
module.exports = secondSmallest;
function sortNumbers(numbers){
    if( !Array.isArray(numbers) || numbers.length===0 || !numbers.every(item => typeof item === "number") ){
        return null;
    }
    numbers.sort(function (a, b) {
        return a - b;
    });
    return numbers;
}
module.exports = sortNumbers;
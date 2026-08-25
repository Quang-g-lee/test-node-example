function findMedian(numbers){
    if( !Array.isArray(numbers) || numbers.length===0 || !numbers.every(item => typeof item === "number") ){
        return null;
    }
    numbers.sort(function (a, b) {
        return a - b;
    });
    let middle = Math.floor(numbers.length/2)
    if (numbers.length % 2 === 1){
        return numbers[middle];
    }
    else {
        return (numbers[middle]+numbers[middle-1])/2;
    }

}
module.exports = findMedian;
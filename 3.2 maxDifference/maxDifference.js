function maxDifference(numbers) {
    if(!Array.isArray(numbers)||numbers.length===0){
        throw new Error("Error");
    }
    let max = numbers[0];
    let min = numbers[0];
    for(let i=1; i<numbers.length; i++){
        if(max<numbers[i]) {
            max = numbers[i];
        }
        if(min>numbers[i]) {
            min = numbers[i];
        }
    }
    
    return max - min;

}

module.exports = maxDifference;
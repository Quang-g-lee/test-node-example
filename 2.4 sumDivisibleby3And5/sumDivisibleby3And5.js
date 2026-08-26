function sumDivisibleby3And5(numbers){
    if(!Array.isArray(numbers)||numbers.length===0){
        throw new Error("Error");
    }

    const result = numbers.reduce((sum, num) => {
        if(typeof num !== "number"){
            throw new Error("Error");
        }
        if(num % 3 === 0 && num % 5 === 0){
            return sum+num;
        }
        else{
            return sum;
        }
    }, 0);

    return result;

}

module.exports = sumDivisibleby3And5;
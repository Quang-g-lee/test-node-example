function maxSubarraySum(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Error");
        
    }
    let maxSum = numbers[0];
    for (let i = 0; i<numbers.length; i++){
        for (let j = i+1; j <=numbers.length; j++){
            const subarray = numbers.slice(i,j);
            const sum = subarray.reduce((total, number) => {
                return total + number;
            }, 0);

            if (sum > maxSum) {
                maxSum = sum;
            }
            
        }

    }
    return maxSum;
}

module.exports = maxSubarraySum;
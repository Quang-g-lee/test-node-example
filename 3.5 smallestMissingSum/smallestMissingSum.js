function smallestMissingSum(numbers) {
    
    if(!Array.isArray(numbers) || numbers.length ===0) {
        throw new Error ("số nguyên dương đầu vào phải là một mảng số không rỗng.");
    }
    let smallest = 1;

    numbers.sort(function(a,b){
        return a - b;
        });

    for(const num of numbers) {
        if(!Number.isInteger(num) || num <= 0){
            throw new Error ("tất cả phần tử phải là số nguyên dương");
        }
        
        if (num > smallest){
            return smallest;
        }
        smallest = smallest + num;
    }
    return smallest;
    
}

module.exports = smallestMissingSum;
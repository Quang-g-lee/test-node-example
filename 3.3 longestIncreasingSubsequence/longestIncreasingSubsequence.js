function longestIncreasingSubsequence(numbers){
    if(!Array.isArray(numbers)){
        throw new Error("đầu vào phải là 1 mảng");
    }
    for(const number of numbers){
        if(!Number.isInteger(number)){
            throw new Error("các số phải là số nguyên")
        }
    }
    if(numbers.length === 0){
        return 0;
    }

    const leng = Array(numbers.length);
    leng.fill(1);  //biến tất cả phần tử trong numbers thành 1(độ dài)

    for(let i=1; i<numbers.length; i++){
        for(let j=0; j<i; j++){
            if(numbers[i] > numbers[j]){
                const newLeng =leng[j]+1;
            
                if(newLeng>leng[i]) {
                    leng[i]=newLeng;
                }
            }
        }
    }

    return Math.max(...leng);
}

module.exports = longestIncreasingSubsequence;

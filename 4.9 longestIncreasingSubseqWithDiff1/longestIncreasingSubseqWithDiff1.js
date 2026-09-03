function longestIncreasingWithDiff1(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Đầu vào phải là một mảng");
    }

    if (numbers.length === 0) {
        return 0;
    }

    for (const number of numbers) {
        if (!Number.isInteger(number)) {
            throw new Error("Các phần tử phải là số nguyên");
        }
    }

    let currentLength = 1;
    let maxLength = 1;

    numbers.reduce((previousNumber, currentNumber) => {
        
        if ( currentNumber - previousNumber === 1 ) {
            currentLength++;
        } else {
            currentLength = 1;
        }

        if (currentLength > maxLength) {
            maxLength = currentLength;
        }

        return currentNumber;
    });

    return maxLength;
}

module.exports = longestIncreasingWithDiff1;
function maxProductOfThree(numbers) {
    if (numbers.length < 3) {
        throw new Error("Mảng phải có ít nhất 3 phần tử.");
    }
    numbers.sort((a, b) => a - b);

    const n = numbers.length;

    const product1 = numbers[n - 1] * numbers[n - 2] * numbers[n - 3];
    const product2 = numbers[0] * numbers[1] * numbers[n - 1];

    return Math.max(product1, product2);
}

module.exports = maxProductOfThree;
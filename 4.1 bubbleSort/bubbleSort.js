function bubbleSortMoves(numbers) {
    let moves = 0;  //lưu số lần đổi chỗ
    const result = [...numbers];

    for(let i = 0; i < result.length - 1; i++){
        for(let j =0; j < result.length - 1 - i; j++){
            if (result[j] > result[j+1]) {
                const temporary = result[j];
                result[j]=result[j+1];
                result[j+1]= temporary;

                moves++;
            }
        }
    }
    return moves;
}

module.exports = bubbleSortMoves;
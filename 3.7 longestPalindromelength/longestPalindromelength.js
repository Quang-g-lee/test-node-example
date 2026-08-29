function longestPalindromelength(str) {

    if (typeof str !== "string"){
        throw new Error("đầu vào phải là 1 chuỗi ký tự");
    }
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    const charCounts = {};  //tạo object để lưu số lần lặp lại
    
    //for of để lấy từng phần tử trong string hoặc array
    for (const char of cleaned) {
        charCounts[char] = (charCounts[char] || 0) +1;
    }

    let leng = 0;
    let hasOdd = false;  //để kiểm tra xem có ký tự lẻ không

    //for in để lấy từng key trong object
    for (const char in charCounts) {
        const count = charCounts[char];
        if(count % 2 === 0) {
            leng = leng + count;
        }
        else {
            leng = leng + count-1;
            hasOdd = true;  //có ký tự lẻ
        }
    }

    if (hasOdd === true) {
        leng = leng +1;
    }
    return leng;
}

module.exports = longestPalindromelength;
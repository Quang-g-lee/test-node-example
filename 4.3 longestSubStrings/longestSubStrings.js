function longestSubstring(strings) {
    if (strings.length === 0) {  //mảng rỗng chuỗi con chung bằng 0
        return 0;
    }

    const firstStr = strings[0];
    let maxLength = 0;

    for (let i = 0; i < firstStr.length; i++) {
        for (let j = i + 1; j <= firstStr.length; j++) {

            // cắt chuỗi con từ vị trí i đến trước vị trí j
            const substr = firstStr.slice(i, j);

            // kiểm tra chuỗi con có xuất hiện trong tất cả các chuỗi hay không
            const isCommon = strings.every(str => str.includes(substr)
            );

            // là chuỗi con chung
            if (isCommon) {
                // So sánh độ dài hiện tại với độ dài lớn nhất
                maxLength = Math.max(maxLength, substr.length);
            }
        }
    }

    // Trả về độ dài chuỗi con chung dài nhất
    return maxLength;
}

module.exports = longestSubstring;
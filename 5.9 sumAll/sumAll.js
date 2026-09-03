function sumAll(arr) {
    return arr.reduce((acc, obj) => {  //dùng reduce để duyệt từng obj trong arr rồi lưu kết quả vào acc
        Object.keys(obj).forEach(key => {  ///duyệt từng key trong obj
            const val = Number(obj[key]);  //chuyển thành dạng số
            if (!isNaN(val)) {
                acc[key] = (acc[key] || 0) + val;  //nếu acc[key] chưa có thì lấy 0.
            }
        });
        return acc;
    }, {});
}
module.exports = sumAll;
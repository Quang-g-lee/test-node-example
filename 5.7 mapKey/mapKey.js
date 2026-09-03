function mapKey(keys, collections) {
    return collections.map(obj => {  //duyệt từng obj trong collect
        const newObj = {};
        keys.forEach(key => {
            if (key in obj) {
                newObj[key] = obj[key];
            }
        });
        return newObj;  //sau khi duyệt xong keys thì trả về newObj cho map. duyệt hết collections thì trả về mảng mới gồm các newObj
    });
}

module.exports = mapKey;
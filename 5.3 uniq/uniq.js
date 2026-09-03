function uniq(array) {

    const result = [];
    
    array.forEach(element => {
        if (!result.includes(element)) {
            result.push(element);
        }
    });

    return result;
}

module.exports = uniq;
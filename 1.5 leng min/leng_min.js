function leng_min(arr){
    if(!Array.isArray(arr)||arr.length===0){
        return null;
    }
    let min=arr[0];
    for(let i=1; i<arr.length; i++){
        if(min.length>arr[i].length){
            min=arr[i];
        }
    }
    return min;
}

module.exports = leng_min;
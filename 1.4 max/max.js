function maximum(arr){
    if(!Array.isArray(arr)||arr.length===0){
        return null;
    }
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
module.exports = maximum;

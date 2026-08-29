function findMedianOf2Array(arr1,arr2){
    if( !Array.isArray(arr1) || !Array.isArray(arr2) ) {
        throw new Error("Error");
    }
    const arr = [...arr1, ...arr2].sort((a, b) => a - b);

    if(arr.length===0){
        throw new Error("Error");
    }

    let middle = Math.floor(arr.length/2)
    if(arr.length % 2 ===1 ) {
        return arr[middle];
    }
    else{
        return(arr[middle] + arr[middle-1])/2;
    }
}
module.exports = findMedianOf2Array;
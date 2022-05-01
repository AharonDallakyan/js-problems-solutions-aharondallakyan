function getHead(arr) {
    let newArr = [];
    newArr.push(arr[0]);
    return newArr;
}
function getTail(arr){
    let newArr = [];
    for(let i = 1;i<arr.length;i++){
        newArr.push(arr[i]);
    }
    return newArr;
}
function fromPairs(arr2){
     return  Object.entries(arr2)
        .filter(([k, v]) => {
            return true;
        })
        .reduce((acc, [k, v]) => (acc[k] = v, acc), {});

}

function zipArrIntoObj(arr,arr1){
    const obj = {}
    for (let i =0 ; i<arr.length  ; i++){
        if(!arr1[i]){
            obj[arr[i]] = null
            return obj
        }
        obj[arr[i]] = arr1[i]
    }
    return obj
}


module.exports={
    getHead,
    getTail,
    fromPairs,
    zipArrIntoObj};

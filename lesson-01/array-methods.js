function filterRange(arr,a,b){
    let newArr = [];
    for(let i = 0;i<arr.length; i++){
        if(arr[i] > a && arr[i] < b){
            newArr.push(arr[i])
        }
    }
    return newArr.sort()
}
function concatMany(...arg){
    let result = [];
    let newArr = [];
    newArr.push(...arg)
    for(let i = 0; i < newArr.length; i++){
        result = result.concat(newArr[i])
    }
   return result
}

function findById(arr,id){
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        if(arr[i].id === id){
            return obj = arr[i]
        }
    }
    return 'no data'
}

function generate(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push({title:arr[i],idx:i})
    }
    return newArr
}
function removeByLetter(arr,letter){
    let newArr = [];
    for(let i = 0; i< arr.length; i++){
        let splitWord = arr[i].split("")
        if(letter !== splitWord[0]){
            newArr.push(arr[i])
        }
    }
    return newArr
}

module.exports={
    filterRange,
    concatMany,
    findById,
    generate,
    removeByLetter
};



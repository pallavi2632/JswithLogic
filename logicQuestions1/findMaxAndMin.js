// find max array length given array
const arrNumber =[23,45,678, 1,3 ,0,45];
const maxFunction=(arr)=>{
    return arr.reduce(function(pre,cur){
        return pre > cur ? pre:cur;
     
    })
}


console.log(maxFunction(arrNumber))

// find min array length given array
const arrNum =[23,45,678, 1,3 ,0,45];
const minFunction=(arr)=>{
    return arr.reduce(function(pre,cur){
        return pre < cur ? pre:cur;
     
    })
}
console.log(minFunction(arrNum))
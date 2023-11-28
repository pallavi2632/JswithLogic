const arrayNum =[2,34,5,6,7];
const sumValue=(arr)=>{
    return arr.reduce((pre, cur)=>{
        return  pre+cur;
    })
    
}
console.log(sumValue(arrayNum))
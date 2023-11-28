const arr1=[2,43,5,6,78,12];
const arr2 =[56,13,24,90];

const finalArr =[...arr1, ...arr2];
console.log(finalArr);
const sortArr =finalArr.sort(function(a,b){
    return a-b
});


console.log(finalArr);
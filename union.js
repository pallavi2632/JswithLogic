const arr1=[1,23,12,24,5,12]
const arr2 =[12,21,12,4,5,1];
const union =[...arr1 , ...arr2]
// console.log(union);

console.log([...new Set(union)]) //its use for remove duplicate elements
const arrNumber=[1,2,3,6,3,5,2,7,8,1];
const duplicates= arrNumber.filter((ele,index, arr)=>arr.indexOf(ele)!==index);
console.log(duplicates);
const arr1=[1,23,12,24,5,12]
const arr2 =[12,21,12,4,5,1];
let intersectionArr=arr1.filter((ele)=>{
    return arr2.includes(ele)
})
console.log([...new Set(intersectionArr)])

// const arr1=[1,23,12,24,5,12]
// const arr2 =[12,21,12,4,5,1];
// let intersectionArr=arr1.((ele)=>{
//     return arr2.includes(ele)
// })
// console.log([...new Set(intersectionArr)])
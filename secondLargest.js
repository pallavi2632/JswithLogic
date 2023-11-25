
// find largest value in array
const intArray=[23,4,5,4,12, 78, 90];
const largestValue=(arr)=>{
    firstLargestValue =Math.max(...arr)
return (firstLargestValue)
}
console.log(largestValue(intArray))


// find second largest value in array
const intArr=[23,4,5,4,12, 78, 90];
const largestValue1=(arr)=>{
    firsttLargestValue =Math.max(...arr) // largest value find logic
    index=arr.indexOf(firsttLargestValue) // take value into intArr
    arr.splice(index,1);    // remove first element from array
    secondLargestValue =Math.max(...arr);
return (secondLargestValue)
}
console.log(largestValue1(intArr))
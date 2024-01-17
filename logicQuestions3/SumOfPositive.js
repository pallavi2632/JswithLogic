function sumOfPositive(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current)=>acc+current,0);
}
console.log(sumOfPositive([2, 1, -2, 3, -5]));

// function sumOfPositive2(arr) {
//   let initialValue = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0){ initialValue += arr[i];}else{return "negative"}
//   }
//   return initialValue
// }
// console.log(sumOfPositive2([2, 1, 2, 3, 5]));

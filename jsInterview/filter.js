// its only used to filter value inside an array
  // filter function conditionke according kam krega jaise agr 4 se greater hoga to output dega otherwise ni dega
const arr = [4, 6, 8, 5, 1, 9];

function isOdd(x) {
  return x % 2;
}
function isGrater(x) {
  return x > 4;
}
// function isLess(x) {
//   return x  < 5;
// }
function isEven(x) {
  return x % 2 === 0; // jb moduls krne pe reminder 0 aa jaye tb even hoga
}
const output = arr.filter((x)=>x  < 5);   // short term declaring filter // arrow function


//   const output = arr.filter(function isLess(x) {
//     return x  < 5;
//   });


console.log(output);

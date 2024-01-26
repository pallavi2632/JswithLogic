function maxElement(arr) {
  let i;
  let max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
let arr = [22, 24, 50, 100, 23];
console.log("largerst number is",+ maxElement(arr));

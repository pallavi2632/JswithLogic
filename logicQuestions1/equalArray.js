const arr1 = [2, 4, 2, 5, 8]
const arr2 = [1, 3, 1, 6, 3,3]
const isArrayLength =
  arr1.length == arr2.length &&
  arr1.every((curEle) => {
    if (arr2.indexOf(curEle) > -1) {
      return (curEle = [arr2.indexOf(curEle)])
    }
  })

console.log(isArrayLength);

// we have new arr
const user = [
  { firstName: "supriya", lastName: "maurya", age: 23 },
  { firstName: "priya", lastName: "arya", age: 13 },
  { firstName: "riya", lastName: "yadav", age: 21 },
  { firstName: "nitya", lastName: "singh", age: 23 },
  { firstName: "siya", lastName: "dev", age: 15 },
  { firstName: "surya", lastName: "pandit", age: 30 },
];
// using mapping we can get  this array of object
// const userData= user.map(item=>item.firstName+ " "+item.lastName +" "+ "age is"+ " "+ item.age )
// console.log(userData);

// reduce  // hown many people are in between 25 age

const userData = user.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(userData);

const outputlist = user.reduce((names, item) => {
    if(item.age < 30){
         names.push(item.firstName); //can also use names.unlist(item.firstName);
    }
    return names; 
}, []);
console.log(outputlist)




// filter
//  const userItem =user.filter((item )=>item.age<25)
// const userItem =user.filter((item )=>item.age<25).map((item)=>item.firstName)  //here we use map becasue i want to know only name neither all object
// console.log(userItem)

// it does not reduce anything its show the each and every value based on condition
// in reduce when we create funciton then its takes two arguments (functions, accumulator);
// const arr = [5, 2, 6, 10, 1];
//  sum
// function sumValue() {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]; // yha sum ke andar 0+arr[i] means arr ki value ke sath sum jud jayega
//   }
//   return sum; // sum return krega
// }
// console.log(sumValue());

//maX value
// function maxValue(){
//     let max=1;
//     for(let i=0; i<arr.length; i++){
//       if(arr[i]<max){
//         max=arr[i]
//       }
//     }
//     return max
// }
//  console.log(maxValue(arr))

// with help of reduce  find max number

// const output = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);
// console.log(output);

// const output = arr.reduce(function (acc, curr) {
//   // ye funciton iterate krega each and every value ko
//     // curr- represnt the current value =arr[i]
//   // acc- its accumulate the value and result its work as is is sum which is write in above code= sum
//   acc = acc + curr;
//   return acc;
// },0); // 0 represents sum/ acc
// console.log(output);

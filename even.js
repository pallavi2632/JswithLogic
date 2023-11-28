const num =[34,56, 12,2,6,89, 20, 40,60,100];
const even =num.filter((item)=>{
    return item%2===0;

})

console.log('even number is :', even);


var data = [2, 3, 12, 5, 20, 43];
var temp = [];

for (let i = 0; i < data.length; i++) {
  // console.log(number[i]%2); //% eska mtlub hai reminder
  if (data[i] % 2 == 0) {
    temp.push(data[i]);
  }
}
for (let i = 0; i < temp.length; i++) {
  temp[i] = temp[i] * 2;
}
console.log(temp);

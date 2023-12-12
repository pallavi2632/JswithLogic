const arr = [3, 4, 6, 2, 8];

function double(x) {
  return x * 2;
}
function tripal(x) {
  return x * 3;
}
// function binary(x){
//     return x.toString(2); // 2 se define ki jati hai binary ko
// }
// const output =arr.map(binary);

                                // hum funciton pass krk bhi define kr skte hai
// const output =arr.map(function binary(x){
//     return x.toString(2); // 2 se define ki jati hai binary ko
// });

                                    // arrow funciton ke throughbhi kr skte hai
// const output =arr.map((x)=>{
//         return x.toString(2); // 2 se define ki jati hai binary ko
//     });

                                        // new keyword
// map function each and every value ki mapping krta hai and also create new array for storing value 
const output = arr.map((x) => x.toString(2));
console.log(output);

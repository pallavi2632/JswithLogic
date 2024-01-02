// curring is a funciton that takes an agrument at a time and returns a new function
// hello(a,b) ya hello(a)(b)
// curring function depends on number of arguments

// function evaluate(operation){
//  return function(a){
//  return function (b){
//     if(operation ==="sum") return a+b;
//     else if(operation ==="sub") return a-b;
//     else if(operation ==="mul") return a*b;
//     else if(operation ==="div") return a/b;
//     else return "invalid function"
//  }
//  }
// }
// console.log(evaluate("sum")(4)(4))
// const multiply= evaluate("mul")
// console.log(multiply(5)(5))

// function f(a) {
//   return function b(b) {
//     // console.log(a,b)
//     return `${a} ${b}`;
//   };
// }
// console.log(f(5)(6));

// why we use- (to passing varibale again and again and  ... to create higer order funtion)

// function sum(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//     return a - b ;
//   }
//   function mul(a, b) {
//     return a *b;
//   }
//   function divide(a, b,c) {
//     return a/b;
//   }

// console.log(sum(12,3))
// console.log(sub(12,3))
// console.log(mul(12,3))
// console.log(divide(12,3,6))

//infinite curring
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(5)(4)(7)(12)());

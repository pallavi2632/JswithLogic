// funcitons are heart of javascript 


a();

// function statement  function declaration

function a(){
    console.log("a, called");
}


// function expression
var b =function(){
    console.log("b, called");
}
b();

 // this is name funciton expression
var c =function hello(){ 
    console.log("b, called");
}
c();


//when we pass some params in function then we can say its paramter and
//  when we pass some data in calling function like b(argu, argu) then we can say it is argument



function d(param1, param2){ // here we use parameter // and a labale which is identifier get those value we can say paramtere
    console.log("d called")
}
d(1,2) // here we use argument   // a value which we pass inside a function we can say argument

// anonymous function
// function(){
//     console.log(riya)
// }


// first class function - ability to be used like values

function e(param){
    console.log(param)
}

e(function(){  // we can pass argument as a function look like this inside a function

})
// ya aise bhi kr skte hai
function f(param){
    console.log(param)
}
function A(){  // we can pass argument as a function look like this inside a function
 console.log("neha")
}
f(A)


// 
function g(param){
  return function xyz(){

  }
}

console.log(f(A));
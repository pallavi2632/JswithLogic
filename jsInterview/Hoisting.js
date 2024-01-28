// age =100;
// console.log(`value is the ${age}`);
// var age=300; 

variable=10; //undefind
(()=>{
    foo=100;  //100
    console.log(variable) //10
    var foo= 100;  //change value 100
    variable=20; //change value-20
    console.log(variable)
})();

console.log(foo) //100
console.log(variable) //20
var variable=30; //30
function curr(a, b){
 return a+b;
}
console.log(curr(9,4))

//second fucntion

function curring(a){
    return function(b){  //this function looks like a clousre
        return function(c){
            return a*b*c;
        }
    }
}
console.log(curring(2)(5)(10));  // this is curring
var fac= function(n){
 if(n===0|| n===1){
    return 1
 }else{
    return n*fac(n-1);
 }
}

console.log(fac(5))
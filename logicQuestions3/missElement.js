// var a=[1,4,6]
// var count=6;
// var missing=[];

// for(var i=0; i<a.length; i++){
//  for(var j=1; j<=count; j++){
//     if(a[i]!=j){
//         missing.push(j)
//     }
//  }

// }
// console.log(missing)


var a = [5],
  count = 5;
var missing = new Array();

for (var i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing);
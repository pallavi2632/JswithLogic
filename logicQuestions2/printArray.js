// var a=[10,20,30,40,50,60]
//  for(let i=0; i<a.length; i++){
//     console.log(a[i])
//  }

//  var a=[10,20,30,40,50,60]
//  for(let i=0; i<a.length; i++){
//     // console.log(i)
//         console.log("at Index" + i + "" + a[i]) 
//  }

var a = new Array();
a[0]="neha";
a[1]="supri";
a[2]="nitu";
a[3]="supriya";
a[4]="priya";
a[5]="riya";

for(let i=0; i<a.length;i++){
    console.log(  i + " "+ a[i])
}

// map //forEach // forIn //forOf Loop

// forin
// var number=[10,20,30,40,50,60]
//  for(let a in number){
//     console.log(number[a])
//  }
// forof
 var number=[10,20,30,40,50,60]
 for(let a of number){
    console.log(a)
 }
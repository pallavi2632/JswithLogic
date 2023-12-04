
// Array length
// var data =[23,1,54,67,9,1,3,455,7];
//     console.log(data.length);

// Array shift 
var ele =[20,30,40,50,60];  //remove element in an array to front
console.log(ele.shift());
console.log(ele);

// array unshift
var elem =[10,20,30,40]; //add element in an array to the front
console.log(elem.unshift(50));
console.log(elem);

// pop
var val =[10,20,30,40,50]; //it use for delete element end of an array
console.log(val.pop());
console.log(val)

// push
var pus =[10,20,30,40]; //add element of the end of the array
console.log(pus.push(50));
console.log(pus) 

// indexOf
var ind= [10,20,30,40];
for(let i=0; i<ind.length;i++){
    console.log(ind.length);
}
console.log(ind);
console.log(ind.indexOf(40));


//last indexof'
var last =[80,90,70,60,50,80];
console.log(last.lastIndexOf(80));

// include  it means this function check element present of not
var inc =[10,20,30,40,50,60];
console.log(inc.includes(50));

// join its means this fucntion work change any array  into string

var joi = [10,20,30,40,50,60];
console.log(joi.join("m"))
 
// reverse its do array of element  reverse
 var rev =[10,20,30,40,50,60];
 console.log(rev.reverse());

//  concat
var con =[20,30,40]
console.log(con.concat(10,20));

// forEach loop  // i want to check each and every value // value index passes by props
// var forArr=[23,45,12,56]; 
// forArr.forEach(function(value, index){
//     console.log(value)
// })
// every its check all paeticular value is pass condition or not
var eve =[10,20,30,40];
var ever =eve.every(function(value,index){
    return value<5;
})
console.log(ever);


// some its check on array based on condition and return some boolean expression
//  its same as it is every

// filter its based on condition if condition is matching it will create new array it will try to saprate those array implement
var filt =[10,20,30,40];
var filti =filt.filter(function(value,index){
    return value>50;
})
console.log(filti);

// slice it reperesent two argument 1-index, 2-
var sli =[10,20,30,40]
console.log(sli.slice(1,3)); //1-2  aaray removes two element

// splice
var spli =[10,20,30,50,60,90,40]
console.log(spli.splice(1,3,500));
console.log(spli)

// map logic

var ma =[10,30,10,40,50,60];
let area=[]
let are;

for(let i=0;i<ma.length; i++){
    are=ma[i]*5;
    area.push(are);
}

console.log(area);

// es6 map

var  mp =[20,30,50,60,70];
var mm =mp.map(function(value,index){
    return value*3;
})

console.log(mm);



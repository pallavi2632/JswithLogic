//1---- preDefind method reverse String
function reverseString(str) {
  var splitSting = str.split(""); //its convert in to seprate like (" j",  "k")
  var r = splitSting.reverse(); // its reverse to the given string
  var j = r.join(""); // after join to the string
  return j; //store to it
}
console.log(reverseString("supriya maurya")); // consoloe in terminal

// 2---- second method reverse String

function reverseStr(str) {
  var newString = "";
  for (let i= str.length - 1; i>=0;i--) {
    newString += str[i];
  }
  return newString;
}
console.log(reverseStr("neha maurya"));

// 3--- some function f=using getting output

const reverse =(string)=>
    string.split("").reverse().join("");

console.log(reverse("ritika"))


// 4-- some funciton for reverse string

const str='supriya maurya frontend developer';
const revers=[...str].reverse().join("");

console.log(
    revers
)
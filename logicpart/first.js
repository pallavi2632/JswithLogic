// reversre string 1st method

function reverseString(str){
    // in large
    var splitString=str.split("");
    var reverseArray=splitString.reverse();
    var joinArray=reverseArray.join("");
    return joinArray;

    // in short cut
    var splitString1=str.split("").reverse().join("");
    return splitString1
}

console.log(reverseString("hello"))


// reversestirng 2 method


function reverString(str){
 var newString="";

 for(var i=str.length-1; i>=0; i--){
    newString+=str[i];
 }
 return newString;
}

console.log(reverString("neha"))
const reverseString = (str) => {
  var strToArray = str.split(" ");
  console.log(strToArray);
  var arrReverse = strToArray.reverse();
  var strReverse = arrReverse.join(" ");
  return strReverse;
};

console.log(reverseString("buttery"));

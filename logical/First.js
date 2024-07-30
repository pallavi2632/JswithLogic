//  Using a Temporary Variable
let a = 1, b = 2;
let temp = a;
a = b;
b = temp;
console.log(a, b); // Output: 2 1

//  Using Array Destructuring (ES6)
let x = 11, y = 182;
[x, y] = [y, x];
console.log(x, y); // Output: 2 1

// with function
function swap(a, b) {
    return [b, a];
  }
  
  let c = 1, d = 2;
  [c, d] = swap(c, d);
  console.log(c, d); // Output: 2 1

//   arithmatic opeation
let r = 1, s = 2;
r = r + s;
b = r - s;
r = r - s;
console.log(a, b); // Output: 2 1

// bitwise xor
let aa = 143, ba = 132;
aa = aa ^ ba;
ba = aa ^ ba;
aa = aa ^ ba;
console.log(aa, ba); // Output: 2 1
function factorial(num) {
  if (num === 0 || num === 1) { // eska mtlub hai agr diya hua num (0) ke equal hai or num (1) ke
    // equal hai to return krega 1 uske bad
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) { // yha pe agr i num-1 mens diye hue num se ek kam krega, or jo i ki value
    //  hogi (like2) tb i-- krenge previous vale pe jan eke liye
    num *= i; // 3*2
  }
  return num
}

console.log(factorial(1));

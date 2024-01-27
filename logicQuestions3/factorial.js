function factorial(n) {
  let fact = 1;
  for (let i = n; i >=1; i--) {
    fact += fact * i;
  }
  console.log(fact)
}
factorial(5);

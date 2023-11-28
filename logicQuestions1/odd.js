const num = [34, 56, 12, 2, 6,15,19,31 ,60, 100];
const odd = num.filter((item) => {
  return item % 2 == !0;
});

console.log("odd number is :", odd);

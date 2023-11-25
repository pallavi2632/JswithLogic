const empArr = [
  {
    name: "riya",
    age: 29,
  },
  {
    name: "priya",
    age: 34,
  },
  {
    name: "supriya",
    age: 20,
  },
  {
    name: "rivaba",
    age: 44,
  },
  {
    name: "riyaj",
    age: 64,
  },
  {
    name: "riyaj",
    age: 30,
  },
];

const filterdArray=empArr.filter((item)=>{
    return item.age >= 30 
})
console.log(filterdArray) 
const user = [
    { firstName: "supriya", lastName: "maurya", age: 23 },
    { firstName: "priya", lastName: "arya", age: 13 },
    { firstName: "riya", lastName: "yadav", age: 21 },
    { firstName: "nitya", lastName: "singh", age: 23 },
    { firstName: "siya", lastName: "dev", age: 15 },
    { firstName: "surya", lastName: "pandit", age: 30 },
  ];

// using mapping we can get  this array of object
const userD= user.map(item=>item.firstName+ " "+item.lastName +" "+ "age is"+ " "+ item.age )
console.log(userD);

// reduce
  // hown many people are in between 25 age
  const userData = user.reduce(function (acc, curr) {
    if (acc[curr.age]) {
      acc[curr.age] = ++acc[curr.age];
    } else {
      acc[curr.age] = 1;
    }
    return acc;
  }, {});
  

  
  console.log(userData);
    // with the help of reduce how to achieve solution as like age with name {supriya:23}
  const outputlist = user.reduce((names, item) => {
      if(item.age < 30){
           names.push(item.firstName); //can also use names.unlist(item.firstName);
      }
      return names; 
  }, []);
  console.log(outputlist)
  

  // filter
 const userItem =user.filter((item )=>item.age<25)
 console.log(userItem)


//  its work with filter and map how to achieve solution
const userItems =user.filter((item )=>item.age<25).map((item)=>item.firstName)  //here we use map becasue i want to know only name neither all object
console.log(userItems)
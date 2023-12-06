 let student ={
    name:"supriya",
    age:22,
    hobbies:["coding", "learning", "watching tarak mehta"],
    greet:function(){
        console.log("hello supriya maurya")
    },
    role:{
        role1:"frontend developer",
        role2:"developer"
    }
     
 }
 console.log(student);
 delete student.role;
 console.log(student)
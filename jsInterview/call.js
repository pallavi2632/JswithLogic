// call bind apply

let name={
    firstName:"neha",
    lastName:"maurya",
}
let presentValue=function(hometown, state){
    console.log(this.firstName + " " + this.lastName+" " + hometown + " " + state );
}

let name1={
    firstName:"riya",
    lastName:"signh",
}


let name2={
    firstName:"rivaba",
    lastName:"singhaniya",
}

presentValue.call(name, "mumbai", "maharashtra"); // lekin esme aisa ni hai
presentValue.apply( name2, ["bangalore", "karnataka"]); //function ko as an arry leta hai

let bindvalue=presentValue.bind( name1, ["mirzapur", "up"]);
console.log(bindvalue)
bindvalue()
function num(){
    if(num%2==0){
        return 'even'
    }else{
        return "odd"
    }
}
console.log(num(23))


// short form
function num2(value){
    return value%2===0?"even":"odd"
}
console.log(num2(30))
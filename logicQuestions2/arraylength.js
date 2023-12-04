var a=[20,30,40,50,60,70];
console.log(arrayLength());
function arrayLength(){
    var length=0;
    while(a[length]!==undefined){
        length++;
    }
    return length;
}


function minElement(){
    let i;
    let min =arr[0];
    for(i=1; i<arr.length; i++){
        if(arr[i]<min) min= arr[i]
    }
    return  min
}
let arr= [23,1,45,0,23,78,-1]
console.log(minElement(arr))
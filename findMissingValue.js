const array =[3,4,5,6,8,2,0];
const missValue=[];
const sortValue= array.sort();
console.log(sortValue);
 const missingValue= (arr)=>{
    const minValue= Math.min(...arr); //for find min value
    const maxValue= Math.max(...arr); //for find max value
    for( let i=minValue; i<maxValue; i++){ // for check if i= min value and i<maxvalue then i++
        if(arr.indexOf(i)<0){ //if arr of index 0 se chota hai
            missValue.push(i); // push the element on empty list
        }

    }
    return missValue
 }
 console.log(missingValue(array))
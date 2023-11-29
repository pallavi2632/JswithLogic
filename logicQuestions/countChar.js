function hello(name){
    var length =0;
    while(name[length]!==undefined) // agr name ke length undefined ke barabar ni hai tb length ++ hona chahiye
        length++;
        return length;
    }
    
    console.log(hello("supriya"));
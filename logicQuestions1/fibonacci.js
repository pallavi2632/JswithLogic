var a=0;
var b=1;
for(let i=0; i<=15; i++)
{
    var temp= a+b; // add value a+b
    a=b //here a = b jo bhi number aayega a k pass wo b me store ho jayegi  and here we use swap logic for the implementaion
    b=temp; // ab b ki value temp ke equal ho jayegi
    console.log(temp)
}
// function a() { 
//   for (var i = 0; i < 3; i++) {  // when we will use var keyword it will display 3,3,3, during 1 sec
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// a();

function b() {
    for (let i = 0; i < 3; i++) {   // when we will use let keyword it will display 0,1,2 during 1 sec
      setTimeout(function log1() {
        console.log(i);
      }, i * 1000);
    }
  }
  
  b();
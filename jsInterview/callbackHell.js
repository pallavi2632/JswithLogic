// here are some two type of problem  in callback function
// 1- callback hell writes code like(pyramid of Doom)  and inversion control

// callback hell code as like
// to achieve async operation we can use callback functions with callback exists then async operation is exist
const cart=["shoes" ,"pants", "kurta"]
// these code looks like is pyramid of doom
api.CreateOrder(cart, function(){
    api.OrderSuccess(function(){
        api.OrderPayment(function(){
             api.UpdateWallet()
        })
    })
})


// Callback Hell: Callbacks are useful when we want to perfrom some extra functionality with our already
//  existing function for example passing an error handling callback to our already created function, 
//  BUT when callbacks within themselves start taking in other functions as callbacks then that 
//  mess that you are left with is known as the Callback Hell leading to unreadable code, hence unmaintanable code.
// 2) Inversion Of Control: when we pass a function to other function 
// as a callback we are giving the called function the control of whether 
// to even call it or not or maybe call it in a wrong context. For example a 
// success callback is called when an error occours inside a called 
// function (maybe due to human error while writing the code  for called function),
//  this type of giving up of control over our functions is known as inversion of control.
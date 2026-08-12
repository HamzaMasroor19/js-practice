function showResult(total) {
  console.log("The total is: " + total);
}

function calculateSum(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);    
}

calculateSum(5, 10, showResult); 

//function simple
// function process(name){
//   console.log(name)
// }
// process('ayaan')
//Callback 
// function process(data){
// console.log('process....'+data)
// }
// function Delete(data){
//   console.log('delete.....'+data)
// }
// function func(callback){
//   callback('Ayaan')
// }
// func(Delete)
// function runtask(greet){
// console.log('hello '+ greet)
// }
// function sayHi(callback){
// callback('Hamza')
// }
// sayHi(runtask)
// function greet(name){
// console.log('hello '+ name)
// }
// function sayHi(callback){
// callback('Ayaan')
// }
// sayHi(greet)
// function process(data){
//   console.log('process.....'+data)
// }
// function Delete(data){
//   console.log('delete.....'+data)
// }
// function performaction(callback){
//   callback('Ayaan')
// }
// performaction(Delete)
// performaction(process)
// function add(a ,b){
//   let add = a + b
//   console.log(add + ' is the added value')
// }
// function sub(a ,b){
//    let sub = a - b
//   console.log(sub + ' is the substracted value')
// }
// function calculate(a ,b ,operation){
// operation(a , b) 
// }
// calculate(1 ,60 ,add)
// calculate(60 ,40 ,sub)
// function Allowed(allow){
//  console.log('Access granted bz age is valid'+ allow)
// }
// function Check(age ,callback){
//    if(age >=18){
//     callback(age)
//   }else{
//     console.log('denied')
//   }

// }
// Check(20,Allowed)
// function success(name){
//   console.log('Login good')
// }
// function failure(name){
//   console.log('login failed')
// }
// function checklogin(name ,callback ,failed){
//   if(name==='Hamza'){
//     callback(name)
//   }else{
//     failed(name)
//   }
// }
// checklogin('Hamza',success,failure)
// checklogin('Umer',success,failure)
function taskCompleted() {
    console.log("Task completed");
}

function performTask(callback) {
    console.log("Task started");

    setTimeout(function () {
        callback();
    }, 2000);
}

performTask(taskCompleted);


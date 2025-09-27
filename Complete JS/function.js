// function greet(name){
// console.log("hamza and "+name);
// }
// greet("Ali");
// const sayBye = function () {
//   console.log("Goodbye!");
// };

// sayBye(); 
// function greetname(name){
//     console.log("Hello"+ name)
// }
// greetname("HAMZA");
// function square(sq){
//     sq = Number(sq);
//    let result =sq * sq;
//     console.log("the square of "+sq + "=" + result)
// }
// square(2);
// const add = (a,b)=>{
//     return a + b
// }
// console.log(add(1,2));
// const multiply =(x ,y)=>{
// return x*y;
// }
// console.log(multiply(2,9))
// const double = (double)=>{
//     return double + double;
// }
// console.log(double(100))
// function greettime (time){
//     time =Number(time)
// if(time<12){
//     console.log("GODD MORNING")
// }else if(time<18){
//     console.log("GOOD AFTERNOON")
// }else{
//     console.log("GOOD EVENING")
// }
// return
// }
// console.log(greettime(10))
// console.log(greettime(15))
// console.log(greettime(20))
const sayBismillah = ()=>{
   return  console.log("Bismillah-ir-Rahman-ir-Raheem");
}

sayBismillah();
//Q!
// function sayHi(name){
// console.log("Hi " + name);
// }
// sayHi("Hamza")
// sayHi("Ali")
//Q2
// function Sq(a){
//     console.log(a * a)
// }
// Sq(5);
// Sq(9);
//Q3
// function calculate(a , b ,operate){
//     if(operate ==="add"){
//         console.log("a + b =", a + b)
//     }else if(operate ==="multiply")
//     {
//         console.log("a x b =", a * b)
//     }else{
 //   }
// }
// calculate(2,3,"add")
//Q4
// function num(a , b){
//     if(a > b){
//         console.log(a)
//     }else{
//         console.log(b)
//     }
// }

// num(5,9)
// num(11,111)
// function greet(name){
// console.log("Ahmed and "+name);
// }
// greet("Ali");
//Arrow Function
// const hello = (name) => "Hello "+ name;
// console.log(hello("Hamza"));
//Q1
const double= (num) => {
    return num + num ;
};
console.log(double(5))
//Q2
const greet =(name) =>{
return "Hello "+ name;
}
console.log(greet("hamza"))
//Q3
const maxnum =(a , b) =>{
if(a>b){
    console.log("a is bigger =",a )
}else{
    console.log("b is bigger =",b)
}
return ;
};
console.log(maxnum(22,9));
//Q4
const sumarray=(arr) =>{
   let sum =0;
for(let i = 0;i < arr.length;i++){
sum = arr[i] + sum;
}
return sum;

}
console.log(sumarray([1,2,3,4,5,6,7,8,8]))
//Q5
const iseven= (even)=>{

    if(even % 2===0){
        return true
        // console.log("even")
    }else{
        return false
        // console.log("odd")
    }

}
console.log(iseven(3))


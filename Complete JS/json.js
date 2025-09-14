// let user ={
//     name :"Hamza",
//     age : 19
// };
// console.log(user);
// let newdata =JSON.stringify(user);
// console.log(newdata);

// let parsedata =JSON.parse(newdata)
// console.log(parsedata.age)
//LocalStorage
// let user ={
//     name :"Ahmed",
//     age :16,
//     city :"karachi"
// };
// let savedata =localStorage.setItem("user",JSON.stringify(user))
// console.log(user)
//Q1
// let car = {
//      brand: "Honda",
//      model: "Civic",
//      year: 2020 
// };
// let carjson =JSON.stringify(car);
// let carObj =JSON.parse(carjson);
// console.log(carjson)
// console.log(carObj.brand)
//Q2
// let save =localStorage.setItem("username","Hamza");
// let get =localStorage.getItem("username");
// console.log(get)
//Q3
let student = { 
    name: "Ali",
    age: 21,
    enrolled: true 
};
let save =localStorage.setItem("student",JSON.stringify(student));
console.log(save)
let get =localStorage.getItem("student");
let parse=JSON.parse(get);
console.log(parse.name)
console.log(parse.age)


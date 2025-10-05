// let marks =[98,23,32,45,64];
// // console.log(marks)
// for(let i =0;i <=marks.length;i++){
//     console.log(marks[i])
// }
//T1 
//let num =[1 ,2 ,3 ,4 ,5];
// console.log(num[0])
// console.log(num[4])
//T2
// let fruit =["Apple","Banana","Mango"];
// fruit.push("Watermelon")
// fruit.shift()
// console.log(fruit)
//T3
// let friend =["ali","ahmed","ayaan"]
// friend[1]="hamza";
// console.log(friend)
//T4 
let num =[2,3,4,5,6,7,8,9,10]
for(let i =0;i<num.length;i++){
    console.log(num[i])
    if(num[i] % 2===0){
        console.log(`even num: ${num[i]}`)
    }
}
//t5
// let city =["Karachi","Quetta","KPK"];
// city.unshift("Lahore");
// city.push("Hyderabad");
// console.log(`the total number of city is :${city.length} and the final arry is :${city}`)
//T1 map
// let ages = [2, 5, 10];
// let newage = ages.map(val => val*12);
// console.log(newage)
// //T2 filter
// let marks = [20, 45, 55, 80, 30, 100];
// let newMarks = marks.filter(val => val > 50);
// console.log(newMarks)
// //T3 find
// let cities = ["Lahore", "Karachi", "Multan", "Faisalabad"];
// let newcity =cities.find(val => (val.length >6));
// console.log(newcity)
// //T4 include
// let roles = ["User", "Editor", "Moderator"];
// let user = "Admin"
// if(roles.includes(user)){
//     console.log("welcome")
// }else{
//     console.log("Denied")
// }
// //T5 reduce
// let studentMarks = [90, 85, 70, 95];
// let newSM= studentMarks.reduce((val1,val2) => val1 + val2);
// console.log(newSM)
// ADMIN EMAIL
// let user = [
//     {id:1,name:"Hamza",role:"Admin",email:"hamza@gmail.com"},
//     {id:2,name:"Ali",role:"User",email:"ali@gmail.com"},
//     {id:3,name:"Umer",role:"Admin",email:"umer@gmail.com"},
//     {id:4,name:"Hamid",role:"User",email:"hamid@gmail.com"}
// ];

// let person = "Admin";

// let admins = user.filter(per => per.role === person);

// if(admins.length > 0){
//     console.log(admins.map(per => per.email)); 
// }else{
//     console.log("DENIED");
// }
let marks =[98,23,32,45,64];
// console.log(marks)
for(let i =0;i <=marks.length;i++){
    console.log(marks[i])
}
let accounts = [
  {username:"hamza", password:"1234"},
  {username:"ali", password:"abcd"},
  {username:"zain", password:"pass"}
];
let username = prompt("Enter your username")
let password = prompt("Enter your password")
 let found = accounts.find(user => user.username === username && user.password === password)
 if(found){
    console.log(`Welcome ${username}`)
 }



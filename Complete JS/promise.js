// let promise = new Promise((resolve, reject) => {
//     let success=false;
//     if(success){
//         resolve("Done");
//     }else{
//         reject("Not Done")
//     }
// })
// .then(result => console.log(result))
// .catch(error => console.log(error))
// console.log(promise)
//Q1
// let promise = new Promise((resolve,reject)=>{

//     console.log("hamza is learning promise")
//     resolve

// })
// .then(done => console.log(done))
//Q2
// let promise =new Promise((resolve,reject)=>{
//     console.log("something went wrong")
//     reject;
// })
// .catch(result => console.log(result))
//Q3
// let promise =new Promise((resolve, reject) => {
//     let success=false;
//     if(success){
//         console.log("It worked")
//         resolve
//     }else{
//         console.log("it failed")
//         reject
//     }
// })
// .then(done => console.log(done))
// .catch(notdone => console.log(notdone))
//Q4 
// let promise =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("2 sec later")
//         resolve
//     },2000)
// })
// .then(done=>console.log(done))
//Q5
let promise =new Promise((resolve, reject) => {
    let num = 5;
    console.log(num * 10);
    resolve
})
.then(done => console.log(done))
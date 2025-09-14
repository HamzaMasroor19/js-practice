function sayhello(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Hello Hamza");
        },2000)
    })
}
async function show() {
    let say = await sayhello();
    console.log(say);
}
show()


// function doubleNum(num) {
//     let promise = new Promise((resolve,) => {
//         setTimeout(() => {
//             resolve(num * 2)
//         }, 1500);
//     })
//     return promise
// }
// async function run() {
//     let newNum = await doubleNum(5);
//     console.log(newNum)
// }
// run()
function getUser() {
    let user="Hamza";
    let age =19;
    let promise=new Promise((resolve) => {
        setTimeout(()=>{
            resolve(`User: ${user} and Age : ${age}`)
        },2000)
    })
    return promise
}
async function run(){
    let run =await getUser();
    console.log(run)
}
run()

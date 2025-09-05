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
// function Processingdata(data){
// console.log("process... "+ data)
// };
// function deletedata(data){
// console.log("delete... "+ data)
// };
// function Updatedata(data){
// console.log("update... "+ data)
// };
// function Insertdata(data){
// console.log("insert... "+ data)
// };
// // Insertdata("Ali")
// function run(callback){
//     callback("Hamza")
// }
// run(Insertdata)

// // CALLBACK HELL;
function getData(dataId, nextdata) {
    setTimeout(
        () => {
            console.log("Data is" + dataId);
            nextdata();
        } ,3000
    );


};
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
            
            })
        })
    })
});

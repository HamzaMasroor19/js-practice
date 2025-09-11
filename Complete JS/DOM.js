// let title =document.getElementById("heading")
// console.log(title)
// let h2 =document.getElementById("heading");
// let btn =document.querySelector("button");
// btn.onclick =function(){

//     h2.innerHTML ="Welcome Hamza";
// }

// console.log(h2)
let h2 =document.getElementById("count")
let plus =document.getElementById("plus");
let minus =document.getElementById("minus");

let count=0;
plus.onclick = function(){
    count =count + 1;
    h2.innerHTML =count
    
}
minus.onclick=function(){
    count = count - 1;
    h2.innerHTML =count
}
console.log(h1)

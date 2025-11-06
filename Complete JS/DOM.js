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
const title = document.querySelector("#title");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  title.classList.toggle("active");
  if (title.classList.contains("active")) {
    title.textContent = "Welcome, Hamza!";
    title.style.color = "green";
  } else {
    title.textContent = "Hello World";
    title.style.color = "black";
  }
});
    let heading = document.getElementById("heading");
    let button = document.getElementById("btn");


    button.addEventListener("click", function() {
      heading.textContent = "Text Changed!";
    });




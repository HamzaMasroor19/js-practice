let btn = document.querySelector("#btn");
btn.addEventListener("click",()=>{
    alert("Event ")
})
let btn2 = document.getElementById("btnSec");
btn2.onclick =()=>{

    console.log("YES BROTHER")
}



<script>
  let h1 = document.getElementById("heading");

  h1.addEventListener("mouseover", function() {
    h1.style.color = "red";
  });

  h1.addEventListener("mouseout", function() {
    h1.style.color = "black";
  });
</script>

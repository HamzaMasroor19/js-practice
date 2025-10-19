// let a =fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>{return res.json()})
// .then((res)=>{console.log(res)})

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data[0].name); 
//   })
// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));


// For a POST request:


// fetch('https://api.example.com/data', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     key: 'value'
//   })
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
//Q1
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=> {return (res.json())})
// .then((data)=>{console.log(data[4].title)})
//Q2
// fetch(" https://jsonplaceholder.typicode.com/users")
// .then((res)=>{return res.json()})
// .then((data)=>{console.log(data[2].email)})
//Q3
// fetch(" https://jsonplaceholder.typicode.com/todos")
// .then((res)=>{return res.json()})
// .then((data)=>{
//     for(let i =0;i<11;i++){
//         console.log(data[i].title)
//     }

// })
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{return res.json()})
// .then((data)=>{
//     let list=document.getElementById("userList")
//     for(let i =0;i<5;i++){
//         let li=document.createElement("li");
//         li.textContent=data[i].title;
//         list.appendChild(li)
//     }
// })
//method POST
fetch("https://jsonplaceholder.typicode.com/posts",{
    method :"POST",
    headers :{"Content-Type": "application/json"},
    body:JSON.stringify({
        title:"hamza is learning JS ",
        body :"this is a dummy post",
        userId:1
    })
})
.then((res)=>{return res.json()})

.then((data)=>console.log(data))

let todos =[
    {id:1,task:"reading",done:false},
    {id:2,task:"Coding",done:true},
    {id:3,task:"Walking",done:false},
    {id:4,task:"Cooking",done:true}
    ]

let last_box_id =todos[todos.length-1].id
let NewId=todos[todos.length-1].id + 1
let new_task=prompt("Add new task");
todos.push({id:NewId,task:new_task,done:false});

let Mark =prompt("Enter the Id Number that u want to mark done?")
Mark =Number(Mark);

let find =todos.find(item => item.id === Mark);
find.done = !find.done;
let removed =prompt("Enter the Id Number that u want to delete?");
removed =Number(removed)
todos=todos.filter(val => val.id !== removed );
for(let i = 0;i <todos.length;i++){
    let task =todos[i];
    let status;
    if(task.done==true){
         status ="[✔]";
    }else{
         status ="[]";
    }
    console.log(status,task.task)
}

console.log(todos)

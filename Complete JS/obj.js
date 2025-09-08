//Q1
// let user = { id: 1, name: "Hamza", role: "Admin" };
// let contact = { email: "hamza@gmail.com", phone: "12345" };
// let combine ={...user ,...contact};
// // console.log(combine)
// let {name,email,...rest} =user
// console.log(user.name, contact.email);
// console.log(rest)
//Q2
let products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "Tablet", price: 20000 }
];
console.log(products.map(x => x.name))
console.log(products.reduce((h1 ,h2) => h1 + h2.price ,0))


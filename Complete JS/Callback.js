function showResult(total) {
  console.log("The total is: " + total);
}

function calculateSum(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);    
}

calculateSum(5, 10, showResult); 

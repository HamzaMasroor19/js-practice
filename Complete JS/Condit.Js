// Conditional Statements Practice
// Author: Hamza
// Date: Sep 3, 2025

let age = 19;
let isStudent = true;
let marks = 75;
let weather = "rainy";

// Example 1: if statement
if (age >= 18) {
    console.log("You are an adult.");
}

// Example 2: if-else
if (isStudent) {
    console.log("You are a student.");
} else {
    console.log("You are not a student.");
}

// Example 3: if-else if-else
if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// Example 4: Nested if
if (age >= 18) {
    if (isStudent) {
        console.log("You are an adult student.");
    } else {
        console.log("You are an adult but not a student.");
    }
}

// Example 5: Switch statement
switch (weather) {
    case "sunny":
        console.log("Wear sunglasses.");
        break;
    case "rainy":
        console.log("Take an umbrella.");
        break;
    case "cold":
        console.log("Wear a jacket.");
        break;
    default:
        console.log("Enjoy your day!");
}

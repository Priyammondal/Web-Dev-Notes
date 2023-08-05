// switch statement

// let age = prompt("Please enter your age: ");

// switch (true) {
//   case age < 18:
//     console.log("You are not eligible for Driving!");
//     break;
//   case age == 18:
//     console.log("You are eligible for driving a bike but not car!");
//     break;
//   default:
//     console.log("You are eligible for driving");
// }

// function
// 1. Named function
// function greet(kuchbhi) {
//     console.log(`Hi ${kuchbhi}, Good to see you!`);
// }

// greet("Siva");

// 2. Anonymous function
// let greet = function (name) {
//   console.log(`Hi ${name}, Good to see you!`);
// };

// greet("Sourav");

//arrow function
// const greet = (name) => {
//   console.log(`Hi ${name}, Good to see you!`);
// };

// greet("Robin");

// Higher order Function

// function operation(add, num1, num2) {
//   let result = add(num1, num2);
//   console.log("result: ", result);
// }
// function add(a, b) {
//   return a + b;
// }
// operation(add, 7, 5);

// pure function

// function multiply(num1) {
//   return num1 * num1;
// }

// let res1 = multiply(5);
// console.log(res1);

// impure function

// function arbitary(num1) {
//   return Math.random() * num1;
// }
// let res2 = arbitary(5);

// console.log(res2);

// callback function

// A callback function is a function passed as an argument to another function and
// will be executed after the completion of the function;

// function operation(add, num1, num2) {
//   num1 = num2 + 5; // 10
//   num2 = num1 * 45; // 450
//   return add(num1, num2);
// }
// function add(a, b) {
//   return a + b;
// }
// let result = operation(add, 7, 5);
// console.log({result})

// IIFE --> immediately invoked function expressionn

// (function greet(name = "Sourav") {
//   console.log(`Hi ${name}, Good to see you!`);
// })();

// Constructor function

// generator function

// var, let , const

/* var num = 12;
console.log(num);
let customName = "Rabin";
console.log(customName);
const pi = 3.14;
console.log(pi) */

// scope ---> Global, function/local, block
// var num = 24;
// let newName = "Sourav";

// function getNumber() {
//   console.log(num);
//   console.log(newName);
// }
// getNumber();

// {
//   console.log(num);
//   console.log(newName);
// }

// console.log(num);
// console.log(newName);

// function getName() {
//   var name1 = "rabin";
//   console.log(name1);
// }
// getName();
// console.log(name1);

// {
//   var name1 = "rabin";
//   let name2 = "sourav";
//   const name3 = "riju";
//   console.log(name1);
//   console.log(name2);
//   console.log(name3);
// }
// name1 = "suro";
// console.log(name1);
// console.log(name2);
// console.log(name3);

// var is function scoped/global scoped, let and const is block scoped

// {
//   var name2 = "Rabin";
//   console.log("inside block=>", name2);
// }
// console.log("outside block=>", name2);

// console.log(salary);
// var salary = 5000000;
// console.log(salary);

// Hoisting

// var salary;
// console.log(salary);
// salary = 50000000;
// console.log(salary);

// console.log(abcd);
// let abcd = 45;
// console.log(abcd);

// let abcd;
// console.log(abcd);
// abcd = 45;
// console.log(abcd);

// TDZ => temporal dead zone

// const abcd = 76;

// var vs let vs const
// 1. var is global scoped but let and const are block scoped
// 2. var can be re declared but let and const can not be re declared
// var name1 = "something";
// console.log(name1);
// var name1 = "rabin";
// console.log(name1);

// let name2 = "something";
// console.log(name2)
// let name2 = "sourav"

// 3. var and let can be reinitialized but const cann't be reinitialized
// const name1 = "something";
// console.log(name1);
// name1 = "sourav";
// console.log(name1);

// 4. var and let can be declard without initialization but const has to be initialized



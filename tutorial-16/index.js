// "use strict";

// x = 3.14;
// console.log("x value-->", x);

// const arr = [12, 3, 45, 76];

// arr.forEach((item) => {
//   console.log(item * 2);
// });

// console.log(arr)

// let customMap = new Map();

// customMap.set("name", "Rabin");
// customMap.set("age", 21);
// console.log(customMap);

// console.log(customMap.get("name"));

// const obj = {
//   name: "Rabin",
//   age: 21,
// };
// console.log(obj);

// const arr = [1, 2, 3, 4, 5];

// customMap.set(obj, "Somethig");
// customMap.set(arr, "Software Engineer");

// console.log(customMap);
// customMap.delete(obj);
// console.log(customMap);
// console.log(customMap.keys())
// console.log(customMap.values())
// console.log(customMap.entries())

// for (item of customMap){
//     console.log(item)
// }
// customMap.clear();
// console.log(customMap);

// const arr = ["Rabin", "Rabin", "Saurav"];
// let john = { name: "John" };
// const set = new Set(arr);
// set.add(21);
// set.add(21);
// set.add(john)
// console.log(set)

// const display = (result) => {
//   console.log("result-->", result);
// };

// const even = (num) => {
//   if (num % 2 === 0) {
//     return 200;
//   } else {
//     return 404;
//   }
// };

// const checkNumber = async () => {
//   const promise = new Promise((resolve, reject) => {
//     let num = 7;
//     const calculation = even(num);
//     if (calculation == 200) {
//       resolve(`${num} is a even number`);
//     } else {
//       reject(`${num} is a odd number`);
//     }
//   });
//   try {
//     let response = await promise;
//     display(response);
//   } catch (err) {
//     console.log("errr->", err);
//   }
// };
// checkNumber();
// promise.then((value) => display(value)).catch((err) => display(err));

const whatever = fetch("https://jsonplaceholder.typicode.com/posts");

whatever.then((jsonData) => jsonData.json()).then((data) => console.log(data));

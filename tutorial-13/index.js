// // Object destructuring

// const obj = { name: "Ramesh", age: 21 };

// const { name, age } = obj;

// console.log(name, age);

// // Array destructuring

// const arr = ["Ramesh", 21];

// const [newName] = arr;

// console.log(newName);

// const calculations = (a, b, callbackFunction) => {
//   const result = a + b;
//   callbackFunction(result);
// };

// const display = (resultSaurav) => {
//   console.log(resultSaurav);
// };

// calculations(45, 45, display);

// const arr = [1, 2, 4, 5, 6, 7];

// const newArr = arr.map(function (item) {
//   return item * 5;
// });

// console.log(newArr);

// javascript is a synchronous and single threaded language

// console.log(1);
// console.log(2);
// setTimeout(function () {
//   console.log(3);
// }, 4000);
// console.log(4);
// console.log(5);

// 1. Promise

// let result = new Promise((resolve, reject) => {
//   resolve(
//     setTimeout(() => {
//       console.log("Successfull");
//     }, 3000)
//   );
// });

// console.log("result-->", result);

const display = (result) => {
  console.log("result-->", result);
};

const even = (num) => {
  if (num % 2 === 0) {
    return 200;
  } else {
    return 404;
  }
};

const promise = new Promise((resolve, reject) => {
  let num = 7;
  const calculation = even(num);
  if (calculation == 200) {
    resolve(`${num} is a even number`);
  } else {
    reject(`${num} is a odd number`);
  }
});

promise.then((value) => display(value)).catch((err) => display(err));
// 2. Async Await

// Generator function

// function* countNumber() {
//   let number = 1;
//   while (number <= 10) {
//     yield number;
//     number++;
//   }
// }

// const numbers = countNumber();

// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());

// this keyword and its importance

// let name = "Robin";
// let user = {
//   name: "John",
//   age: 30,
//   greet() {
//     console.log(this.name);
//     console.log(this.age);
//   },
// };

// user.greet();

// let user = {
//   firstName: "Robin",
//   age: 23,
//   sayHi() {
//     alert(this.firstName);
//   },
//   0: "Saurav",
// };

// console.log(user.firstName);

// user?.age && console.log(user.age);

// symbol

// let id1 = Symbol("Robin");
// let id2 = Symbol("Robin");

// console.log("id1-->", id1);
// console.log("id2-->", id2);

// console.log(id1 === id2)
// let number = 340;

// alert(number);
// alert(id1.toString());

const user = {
  name: "Saurav",
  occupation: "student",
};

const id = Symbol("id");
user[id] = 1;
console.log(user);
console.log(Object.keys(user));

// for (keys in user) {
//   console.log(user[keys]);
// }

let sym = Symbol.for("id");
console.log(sym)
let keySym = Symbol.keyFor(sym)
console.log(keySym)


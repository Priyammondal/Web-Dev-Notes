// function Person(name = "Ram", age = 12) {
//   (this.name = name), (this.age = age);
//   this.greet = function () {
//     console.log(`${this.name} is ${this.age} years old!`);
//   };
// }

// const person1 = new Person("Sourav", 21);
// const person2 = new Person("Robin", 22);

// person1.greet();
// person2.greet();

// let person1 = "saurav";
// let person2 = person1;

// console.log("person1-->", person1);
// console.log("person2-->", person2);
// person1 = "Robin";
// console.log("person1-->", person1);
// console.log("person2-->", person2);

// let obj1 = { name: "John" };
// let obj2 = obj1;
// console.log("obj1-->", obj1);
// console.log("obj2-->", obj2);
// obj1.name = "Sam";
// obj1.age = 32;
// console.log("obj1-->", obj1);
// console.log("obj2-->", obj2);

// let obj1 = { name: "sam" };
// let obj2 = { name: "sam" };
// console.log("obj1 <--> obj2", obj1 === obj2);

// let obj3 = { name: "sam" };
// let obj4 = obj3;
// console.log("obj3 <--> obj4", obj3 === obj4);

// way 1:
// let obj3 = { name: "sam" };
// let obj4 = { ...obj3 };
// console.log("obj3 <--> obj4", obj3 === obj4);

// function person(name, ...others) {
//   console.log("name-->", name);
//   console.log("others-->", others);
// }

// person("saurav", 23, true, "robin");

// for loop, while loop, do while loop

// way 2
// let user = {
//   name: "John",
//   age: 30,
//   occupation: "IAS",
// };
// console.log("user-->", user);

// for of
// for in

// for (let key in user) {
//   console.log("key-->", key);
// }

// for (let value in user) {
//   console.log("value-->", user[value]);
// }

// let user = {
//   name: "John",
//   age: 30,
//   occupation: "IAS",
// };

// let admin = {};

// for (let key in user) {
//   admin[key] = user[key];
// }

// console.log("user-->", user);
// console.log("admin-->", admin);
// console.log("<<-->>", admin === user);

// way 3
// let user = {
//   name: "John",
//   age: 30,
//   occupation: "IAS",
//   address: {
//     location: "kakdwip",
//     pincode: 743347,
//   },
// };

// let admin = structuredClone(user);

// Object.assign(admin, user);

// console.log("user-->", user);
// console.log("admin-->", admin);
// console.log("<<-->>", admin === user);
// admin.address.location = "kolkata";
// admin.address.pincode = 700086;

// console.log("user-->", user);
// console.log("admin-->", admin);

// let person = ["John", 34, "SDE"];

// console.log("person-->", person);
// console.log(person.length);

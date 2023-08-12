// 1. Object literal:

// const person = {
//   name: "John",
//   age: 34,
//   greet: function () {
//     console.log("Hi John!");
//   },
//   2: "something",
// };
// person["salary much"] = 100000;
// delete person["2"]

// console.log("person-->", person);
// console.log(person.name);
// console.log(person["name"]);
// console.log(person.age);
// person.greet();
// console.log(person["2"]);

// 2. Constructor function

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log(`Hi ${this.name}`);
//   };
// }

// const person1 = new Person("Rames", 22);
// const person2 = new Person("Sourav", 21);
// console.log("person1-->", person1);
// console.log("person2-->", person2);
// person1.greet();
// person2.greet();

// 3. new Object()

// const people = new Object();
// people.number = 20;
// people.service = "software developer";
// people.let = "leg";
// console.log("people-->", people);

// if ("service" in people) {
//   console.log(people["service"]);
// }
// if (people.hasOwnProperty("service")) {
//   console.log(people["service"]);
// }

// console.log(Object.keys(people));
// console.log(Object.values(people));
// console.log(Object.entries(people));

// var name = "Ramesh";

// const person = {
//   age: 23,
//   greet: function () {
//     console.log("name1-->", this.name);
//     console.log("name2-->", name);

//   },
// };
// person.greet();

// console.log("person1--->", name);


// console.log("hellow from tutorial-3");
// primitive
// 1. number
// 2. string
// 3. BigInt
// 4. symbol
// 5. undefined
// 6. null
// 7. boolean
let num = 45;
// console.log(typeof num);

// non primitive
// object
// let obj = {
//   first: 45,
//   second: "something",
//   third: 34.6,
//   fourth: function () {
//     console.log("this is a method of obj object");
//   },
// };
num = 78;
// console.log(obj);
// console.log(typeof obj);
// let person1 = `This man is ${num} years old!`;
// console.log(person1);

// type conversion ===> 1. implicit 2. explict
// let occupation = "teacher";
// console.log(typeof occupation);
// occupation = 45;
// console.log(typeof occupation);
// occupation = true;
// console.log(typeof occupation);
// occupation = 132n;
// console.log(typeof occupation);

// wrapper object

// Number, String, BigInt, Boolean, Symbol
let occupation = null;
console.log(typeof occupation);
let occupation2 = Boolean(occupation);
console.log(occupation2);
console.log(typeof occupation2);

// 1. error handeling in js
// 2. network call using fetch

const name1 = "Rabin";

// #primitive
// 1. number
// 2. string
// 3. symbol
// 4. boolean
// 5. bigint
// 6. undefined
// 7. null

// #nonprimitive
// Object

// 1. Map
// 2. Set
// 3. Array
// 4. WeakMap
// 5. WeakSet

const user = {
  name: "Saurav",
  age: 21,
  greet: function () {
    console.log(`Hi, ${this.name}, Good Eveneing!`);
  },
};

user.greet();

let number = 45.67788888;

console.log(number.toFixed(2));
console.log(number.toString(2));

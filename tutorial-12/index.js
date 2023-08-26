// 1. Array

// const user = {
//   name: "John",
//   age: 34,
//   occupation: "doctor",
// };
// console.log(typeof user);
// const arr = [
//   23,
//   "Rabin",
//   { designation: "student" },
//   [2, 3, 4, 5],
//   "Saurav",
//   () => {
//     console.log("This is a arrow function");
//   },
// ];

// arr[5]();
// arr.push("last item");
// arr.unshift("fast item");
// arr.pop();
// arr.shift();
// arr.splice(1, 0, "middle item");
// console.log(arr);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];

// const newArr = [...arr1, ...arr2];
// console.log(newArr);

// for (item in newArr) {
//   console.log(newArr[item]);
// }

// const arr3 = newArr.map((item)=> item*item)
// console.log(arr3)
// console.log(newArr)

// newArr.forEach((item)=> console.log(item * item))

// let number = 123;
// let reversedNumber = 0;

// while (number !== 0) {
//   const lastDigit = number % 10;
//   reversedNumber = reversedNumber * 10 + lastDigit;
//   number = Math.floor(number / 10);
// }

// console.log(reversedNumber);

// for (let i = 0; i < newArr.length; i++) {
//   if (newArr[i] % 2 !== 0) {
//     console.log(newArr[i]);
//   }
// }

// const evenNumbers = newArr.filter((item) => item % 2 === 0);
// console.log(evenNumbers);

// console.log(newArr.join(""))

// 2. Set

// const arr = [23, 23, 23, "Rabin", "Rabin", "Saurav"];
// console.log(arr);
// const customSet = new Set([23, 23, 23, "Rabin", "Rabin", "Saurav"]);
// customSet.add("Rakhi");
// customSet.delete("Rakhi")
// customSet.clear()

// console.log(customSet);

// for (item of customSet){
//     console.log(item)
// }

// 3. Map

// let obj = { role: "sde" };
// const customMap = new Map([["name", "Rabin"]]);
// customMap.set("age", 21);
// customMap.set(obj, "custom role")
// customMap.clear()
// customMap.delete("name")
// console.log(customMap);
// console.log(customMap.get("age"))
// for (item of customMap) {
//   console.log(item);
// }

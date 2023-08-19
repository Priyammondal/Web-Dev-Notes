// console.log("this is tutorial 11");

// 1. Array

// const arr = [
//   123,
//   432,
//   "saurva",
//   { age: 21 },
//   () => {
//     console.log("this is arrow function");
//   },
// ];
// arr.push("something");
// arr.unshift("Rabin");
// arr.shift();
// arr.pop();
// arr.splice(1, 0, "Rabin");
// console.log("arr-->", arr);
// const userData = prompt("Enter your occupation:");
// console.log(userData);
// arr.push(userData)
// console.log(arr.length);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const newArr = arr1.concat(arr2)
// const newArr = [...arr1, ...arr2];

// newArr.forEach((item) => console.log(item));
// newArr.map((item) => console.log(item * 2));
// const even = newArr.filter((item) => item % 2 !== 0);
// console.log(even)

// 2. Map

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
//     console.log(item[0])
// }
// customMap.clear();
// console.log(customMap);

// 3. Set

// const arr = ["Rabin", "Rabin", "Saurav"];
// console.log(arr);

// const set = new Set(arr)
// set.add(21)
// set.add(21)
// set.delete("Rabin")
// console.log(set.has("Rabin"))
// set.clear()
// console.log(set)
// for(item of set){
//     console.log(item)
// }

// const job = "software engineer";
// console.log(job);

// const arr = job.split("")
// console.log(arr.join(""))

// const newJob = job.replace("software", "mechanical");

// console.log(newJob);

// const num = 34.567799;
// console.log(+num.toFixed(2));

// javascript is a synchronous and single threaded language
// synchronous -> one task after another

// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log(3);
// }, 3000);
// console.log(4);

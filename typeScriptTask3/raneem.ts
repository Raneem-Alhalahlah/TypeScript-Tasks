// //Q1
// let num: number = 7;
// if (num % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// //Q2
// let arr: number[] = [80, 90, 17, 100, 340];
// let prise: number = 99;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > prise) {
//     console.log(
//       "Element at index " + arr[i] + " is greater than the given price"
//     );
//   }
// }

// //Q3
// let users = [
//   { name: "Mustafa", age: 28, isAdmin: false },
//   { name: "Malik", age: 30, isAdmin: true },
//   { name: "Hadeel", age: 27, isAdmin: true },
//   { name: "Duha", age: 28, isAdmin: false },
//   { name: "Hosam", age: 24, isAdmin: true },
// ];

// let oldestAdmin = { name: "", age: 0, isAdmin: false };

// for (let i = 0; i < users.length; i++) {
//   if (users[i].isAdmin && users[i].age > oldestAdmin.age) {
//     oldestAdmin = users[i];
//   }
// }

// console.log(oldestAdmin.name);

//Task2

///Sum All Elements in an Array
// function sumAllElements(...nums: number[]): number {
//   var sum = 0;
//   nums.forEach((element) => {
//     sum += element;
//   });
//   return sum;
// }

// console.log(sumAllElements(1, 2, 3, 4, 5));

// //positive or negativ array
// function positive(...arry: number[]): string {
//   arry.forEach((element) => {
//     if (element < 0) {
//       return "Array contains negative numbers";
//     }
//   });
//   return "Array contains only positive numbers";
// }

// //print longest name
// let names: string[] = ["raneem", "mohammed", "jana", "tasneem"];

// let longestName: string = "";

// for (let name of names) {
//   if (name.length > longestName.length) {
//     longestName = name;
//   }
// }
// console.log("The longest name is:", longestName);

// //Count Occurrences of a Character in a String
// let string: string = "Hello World";
// let character: string = "l";
// let count: number = 0;
// for (let i = 0; i < string.length; i++) {
//   if (string[i] === character) {
//     count++;
//   }
// }
// console.log(character + " appears " + count + " times in the string");

// //Identify Prime Numbers in an Array
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let primeNumbers: number[] = [];

// for (let number of numbers) {
//   if (number > 1) {
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         break;
//       }
//       if (i === number - 1) {
//         primeNumbers.push(number);
//       }
//     }
//   }
// }

// console.log("Prime numbers in the array:", primeNumbers);

// task3
// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity. Write a script to increase the price of each product by 10% if the quantity is greater than 5.
interface product {
  name: string;
  price: number;
  quantity: number;
}
let productArr: product[] = [
  { name: "telephone", price: 100, quantity: 2 },
  { name: "laptop", price: 250, quantity: 7 },
  { name: "tablet", price: 70, quantity: 6 },
];

productArr.forEach((element) => {
  if (element.quantity > 5) {
    element.price = element.price * 0.9;
  }
});

console.log(productArr[1].price);
console.log(productArr[0].price);

// task4
// Validate Optional Function in Interface with Default Behavior
// You have an interface Device with an optional method start(). If the device has a start method, it should be called, otherwise, log "Device starting with default settings."

interface Device {
  start?(): void;
}

let D: Device = {
  start() {
    console.log("Device has start");
  },
};

//here i am just call the interface like i am call the function
let D2: Device = {};

if (D.start) {
  console.log("Device a has start function");
} else {
  console.log("Device doesn't have start function");
}

// simple if condition
let check2 = D2.start
  ? console.log("Device has a start function")
  : console.log("Device doesn't a have start function");

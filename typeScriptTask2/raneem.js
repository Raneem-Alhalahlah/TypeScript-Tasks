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
function sumAllElements() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    nums.forEach(function (element) {
        sum += element;
    });
    return sum;
}
console.log(sumAllElements(1, 2, 3, 4, 5));
//positive or negativ array
function positive() {
    var arry = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arry[_i] = arguments[_i];
    }
    arry.forEach(function (element) {
        if (element < 0) {
            return "Array contains negative numbers";
        }
    });
    return "Array contains only positive numbers";
}
//print longest name
var names = ["raneem", "mohammed", "jana", "tasneem"];
var longestName = "";
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    if (name_1.length > longestName.length) {
        longestName = name_1;
    }
}
console.log("The longest name is:", longestName);
//Count Occurrences of a Character in a String
var string = "Hello World";
var character = "l";
var count = 0;
for (var i = 0; i < string.length; i++) {
    if (string[i] === character) {
        count++;
    }
}
console.log(character + " appears " + count + " times in the string");
//Identify Prime Numbers in an Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var primeNumbers = [];
for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
    var number = numbers_1[_a];
    if (number > 1) {
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                break;
            }
            if (i === number - 1) {
                primeNumbers.push(number);
            }
        }
    }
}
console.log("Prime numbers in the array:", primeNumbers);

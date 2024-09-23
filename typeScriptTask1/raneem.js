//Q1
var num = 7;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
//Q2
var arr = [80, 90, 17, 100, 340];
var prise = 99;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > prise) {
    console.log(
      "Element at index " + arr[i] + " is greater than the given price"
    );
  }
}
//Q3
var users = [
  { name: "Mustafa", age: 28, isAdmin: false },
  { name: "Malik", age: 30, isAdmin: true },
  { name: "Hadeel", age: 27, isAdmin: true },
  { name: "Duha", age: 28, isAdmin: false },
  { name: "Hosam", age: 24, isAdmin: true },
];
var oldestAdmin = { name: "", age: 0, isAdmin: false };
for (var i = 0; i < users.length; i++) {
  if (users[i].isAdmin && users[i].age > oldestAdmin.age) {
    oldestAdmin = users[i];
  }
}
console.log(oldestAdmin.name);

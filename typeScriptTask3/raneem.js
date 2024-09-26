// //Q1
// let num: number = 7;
// if (num % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }
var productArr = [
  { name: "telephone", price: 100, quantity: 2 },
  { name: "laptop", price: 250, quantity: 7 },
  { name: "tablet", price: 70, quantity: 6 },
];
productArr.forEach(function (element) {
  if (element.quantity > 5) {
    element.price = element.price * 0.9;
  }
});
console.log(productArr[1].price);
console.log(productArr[0].price);
var D = {
  start: function () {
    console.log("Device has start");
  },
};
//here i am just call the interface like i am call the function
var D2 = {};
if (D.start) {
  console.log("Device a has start function");
} else {
  console.log("Device doesn't have start function");
}
// simple if condition
var check2 = D2.start
  ? console.log("Device has a start function")
  : console.log("Device doesn't a have start function");

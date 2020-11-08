
var a = "15";

var sum1 = parseInt(a) + 5;
var sum2 = parseFloat(a) + 5;
var sum3 = Number(a) + 5;

//above all does the same

//parseInt->converts into int
//parseFloat->converts into float
//Number->converts into number, depending upon value, it returns either int or float. This is best!

console.log("sum1 = ", sum1);
console.log("sum2 = ", sum2);
console.log("sum3 = ", sum3);

var age = prompt("what is your age ?");
var afterFive = Number(age) + 5;
console.log("Age = ", afterFive);



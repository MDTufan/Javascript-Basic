var FastName = "Tufan Ali";
var age = 24;
var gpa = 4.92;

console.log(FastName);
document.write(age);

document.write("<br>");


document.write("My Name is" + FastName + ".I am "+ age + " years old.");





// next...............

var fName = "Tufan";
var lName = "Ali";

// adding multiple strings here
var fullName = fName + " " + lName;
console.log(fullName);
console.log("Today is" + " a " + "beautiful day");
console.log("My name is " + fullName);






// + - * / Etc.....
var num1 = 30;
var num2 = 20;


var sum = num1 + num2;
console.log(num1 + " + " + num2 + " = " + sum);


var sum1 = num1-num2;
console.log(num1 + " - " + num2 + " = " + sum1);


var sum2 = num1*num2;
console.log(num1 + " * " + num2 + " = " + sum2);


var sum3 = num1/num2;
console.log(num1 + " / " + num2 + " = " + sum3);











// type of..........

var num = "20";
num = num.toString();
console.log(typeof num);

var number = 20;
console.log(typeof number);

number = toString(20);
console.log(typeof number);

var x = 2.56789;

console.log(x.toFixed(1));
console.log(x.toFixed(2));


console.log(x.toPrecision(1));
console.log(x.toPrecision(2));












// example

var number1 = parseInt(30);
console.log(number1);


var number2 = parseFloat(56.67);
console.log(number2);


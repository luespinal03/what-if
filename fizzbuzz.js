const prompt = require('prompt-sync')({sigint: true});

let num1 = Number(prompt("Enter a number: "));
let num2 = 3;
let num3 = 5;

if (num1 % num2 === 0 ) {
    console.log("fizz");
}

else if (num1 % num3 === 0) {
    console.log("buzz");
}

if (num1 % num2 % num2 === 0) {
    console.log("Fizzbuzz");
}
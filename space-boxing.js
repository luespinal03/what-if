const prompt = require('prompt-sync')({sigint: true});
let num1 = Number(prompt("Enter your earth weight: "));
let num2 = Number(prompt("Enter number of desired planet: "));
let myWeight = 128 
// let operation = prompt("Your weight on ") 


if ( num2 === 1) {
    console.log("Your weight on Venus is " + num1 * 0.78);
}

else if ( num2 === 2) {
    console.log("Your weight on Mars is " + num1 * 0.39);
}

else if ( num2 === 3) {
    console.log("Your weight on Jupiter is " + num1 * 2.65); 
}

else if ( num2 === 4) {
    console.log("Your weight on Saturn is " + num1 * 1.17); 
}

else if ( num2 === 5) {
    console.log("Your weight on Uranus is " + num1 * 1.05); 
}

else if ( num2 === 6) {
    console.log("Your weight on Neptune is " + num1 * 1.23); 
}


